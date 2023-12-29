import React, { useEffect, useRef } from 'react';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import dataSource from '../datasource.json';
import { extend } from '@syncfusion/ej2-base';
import '../App.css'

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);
//Syncfusion.Licensing.registerLicense('');

const RealtimeBindingSchedule = () => {
    const scheduleRef = useRef(null);
    let connection;
    let data = extend([], dataSource.scheduleData, null, true);
    let isHubConnected = false;

    useEffect(() => {
        const url = 'https://ej2.syncfusion.com/aspnetcore/scheduleHub/';
        connection = new HubConnectionBuilder().withUrl(url, { withCredentials: false }).withAutomaticReconnect().build();

        connection.on('ReceiveData', (action, data) => {
            if (action === 'view') {
                scheduleRef.current.currentView = data;
            }
            if (action === 'eventCreated' || action === 'eventChanged' || action === 'eventRemoved') {
                scheduleRef.current.eventSettings.dataSource = data;
            }
        });

        connection.start().then(() => { isHubConnected = true; }).catch(() => { isHubConnected = false; });

        return () => {
            if (isHubConnected) {
                connection.stop();
            }
        };
    }, []);

    useEffect(() => {
       
        if (!scheduleRef.current) {
            scheduleRef.current = new Schedule({
                height: '550px',
                // selectedDate: new Date(2021, 0, 10),
                eventSettings: { dataSource: data },
                navigating: (args) => {
                    if (args.action === 'view' && isHubConnected) {
                        connection.invoke('SendData', args.action, args.currentView);
                    }
                },
                actionComplete: (args) => {
                    if (isHubConnected && (args.requestType === 'eventCreated' || args.requestType === 'eventChanged' || args.requestType === 'eventRemoved')) {
                        connection.invoke('SendData', args.requestType, scheduleRef.current.eventSettings.dataSource);
                    }
                },
            });

            scheduleRef.current.appendTo('#Schedule');
        }

        
        return () => {
            if (scheduleRef.current) {
                scheduleRef.current.destroy();
                scheduleRef.current = null;
            }
        };
    }, [data]);

    return <div id="Schedule" style={{transform:'scale(1)'}}/>;
};

export default RealtimeBindingSchedule;

