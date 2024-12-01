import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedSeriesDataSelector } from 'redux/main-component/selector';
import { getSelectedSeriesData } from 'redux/main-component/action';
import styled from 'styled-components';
import UserDetail from './userDetails';
import LoadingComponent from 'components/loading';

const ModalData = styled.div`
    .modal-header{
        display: flex;
        justify-content: center;
    }
    .loading{
        display: flex;
        justify-content: center;
    } 
    .modal-header > h2{
        background-color: #009879;
        color: #ffffff;
        /* width: 50%; */
        padding: 0 5px;
        text-align: center;
        border-radius: 5px;
    }
    .modal-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .fields{
        display: flex;
    }
    .fields span.label{
        font-weight: bold;
    }
    .fields span.label::after{
        content: ":"
    }
    .fields span{
        padding: 5px;
        display: inline-block;
        width: 110px;
    }
`;

const ModalContent = ({ data: { login: { uuid = '' } = {}} = {} }:any) => {
    const dispatch = useDispatch();
    const { loading, error, data }:any = useSelector(selectedSeriesDataSelector);
    useEffect(() =>{
        dispatch(getSelectedSeriesData({ title: '', year: 2015 }));
    }, []);
    if (!uuid) return null;
    return (
        <ModalData>
            { loading && <div className='loading'><LoadingComponent /></div>}
            {error && <div>Error: {error}</div>}
            {
                data && <UserDetail {...{ data }}/>
            }
            
        </ModalData>
    );
};

export default ModalContent;