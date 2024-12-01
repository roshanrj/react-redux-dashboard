import React, { useState } from 'react';
import styled from 'styled-components';
import DetailedView from './detailedView';
import { tableProps } from './types';

const WrapperComp = styled.div`
    display: flex;
    justify-content: flex-start;
    & > div{
        flex-basis: 100%;
    }
`;
const TableComp = styled.table `
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    & > thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    & tr > th, tr > td {
        padding: 12px 15px;
    }
    & > tbody tr {
        cursor: pointer;
        border-bottom: 1px solid #dddddd;
    }
    & > tbody tr.selected{background-color: #ccc;}    
    & > tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }
    & > tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }
    & > tbody tr:hover{background-color: rgba(0, 0, 0, 0.4);}
`;

const Table: React.FC<tableProps> = ({ columns, data }) => {
    const [detailedView, setDetailedView] = useState<any>(null);
    const [detailViewVisible, setDetailViewVisible] = useState<boolean>(false); 
    const handleRowClick = (data:any) => { 
        setDetailedView(data);
        setDetailViewVisible(true);
    } 
    return (
        <WrapperComp>
            <div>
                <TableComp>
                    <thead>
                        <tr>
                            {React.Children.toArray(columns.map((v:any) => <th>{v.label}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            React.Children.toArray(data.map((data:any) => 
                                <tr onClick={() => handleRowClick(data)} className={detailedView && data.episode_id === detailedView.episode_id ? 'selected' : ''}>
                                    {React.Children.toArray(columns.map((col:any) => (
                                        <td>{col.render(data)}</td>
                                    )))}
                                </tr>
                            ))
                        }
                    </tbody>
                </TableComp>
            </div>
            { detailViewVisible && <DetailedView {...{ data: detailedView, setDetailViewVisible }} />}
        </WrapperComp>
    );
};

export default Table;