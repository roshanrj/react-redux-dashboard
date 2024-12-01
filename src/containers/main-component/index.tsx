import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seriesDataListSelector } from '../../redux/main-component/selector';
import { convertIntToRoman } from '../../utils/utilityFunction';
import { getSeriesDataList } from '../../redux/main-component/action';
import SearchBar from 'components/searchBar';
import Table from 'components/table';
import Loading from 'components/loading';
import styled from 'styled-components';
import { SeriesListResponse } from 'redux/main-component/types';

type columnType = {
    label: string,
    key: string,
    type: 'TEXT' | 'NUMBER' | 'IMAGE',
    render: (data:any) => React.ReactNode, 
}


const columns: Array<columnType> = [
    {label: 'Episode', key: 'episode_id', type: 'TEXT', render: (data) => (<span>EPISODE {data.episode_id}</span>)},
    {label: 'Episode - Title', key: 'episode-title', type: 'TEXT', render: (data) => (<span>EPISODE {convertIntToRoman(data.episode_id)} - {data.title}</span>)},
    {label: 'Release Date', key: 'release_date', type: 'TEXT', render: (data) => (<span>{data.release_date}</span>)}
];

const NoDataFound =  styled.div`
    background: #f44336;
    color: #FFFFFF;
    text-align: center;
    padding: 5px;
`;

const MainComponent = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const { data: seriesDataList, error: seriesError, loading: seriesLoading } = useSelector(seriesDataListSelector);
    const [filteredDataList, setFilteredDataList] = useState<Array<SeriesListResponse>>([]);

    useEffect(() => {
        dispatch(getSeriesDataList());
    }, []);

    useEffect(() => {
        if (!seriesLoading && seriesDataList.length) setFilteredDataList(seriesDataList);
    }, [seriesLoading, seriesDataList]);

    useEffect(() => {
        if(name && name.length >= 3) {
            const sd = seriesDataList.filter((v:any) => {
                const title = v.title.toLowerCase();
                return title.includes(name.toLowerCase());
            });
            setFilteredDataList(sd);
        }else{
            setFilteredDataList(seriesDataList);
        }
    }, [name]);
    const onSortByClickCB = (value: string) => {
        const sortBy:any = value === 'year' ? 'release_date': 'episode_id';
        const sortedData = value === 'year' ? filteredDataList.sort((a:any, b:any) => new Date(a[sortBy]).valueOf() - new Date(b[sortBy]).valueOf()) : filteredDataList.sort((a:any, b:any) => a[sortBy] - b[sortBy]);
        setFilteredDataList([...sortedData]);
    };
    
    return (
        <div>
            <h3>Implementation of Movie/Series Dashboard</h3>
            <SearchBar {...{ name, setName, onSortByClickCB }}/>
            <div style={{ height: '75vh', overflow: 'auto'}}>
                {seriesError && <div>Error: {seriesError}</div>}
                {
                    seriesLoading ? <Loading /> : (Array.isArray(filteredDataList) && filteredDataList.length) ? <Table {...{ columns, data: filteredDataList }}/> : <NoDataFound>No Data Found!</NoDataFound>
                }
            </div>
        </div>
    );
}

export default MainComponent;