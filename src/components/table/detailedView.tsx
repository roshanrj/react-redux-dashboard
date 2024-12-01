import React, { useEffect } from 'react';
import { convertIntToRoman } from '../../utils/utilityFunction';
import styled from 'styled-components';
import LoadingComponent from 'components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedSeriesData } from '../../redux/main-component/action';
import { selectedSeriesDataSelector } from '../../redux/main-component/selector';

const DetailViewWrapper = styled.div`
    flex-basis: 65%;
    padding: 0.8rem;
    .image-wrapper {
        display: flex;
        justify-content: flex-start;
        & img{
            width: 120px;
        }
        & .content{
            padding: 0 0.8rem;
        }    
    }
`;

const CloseBtn = styled.button`
    background: none;
    border: none;
    padding: 0px;
    margin-right: 1rem;
    vertical-align: top;
    width: 20px;
    height: 20px;
    margin: 0px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
`;


const CloseBtnWrapper = ({ setDetailViewVisible }:any) => (
    <CloseBtn
      className="close-btn"
      type="button"
      onClick={() => setDetailViewVisible(false)}
    >
      <svg className="cross__svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="#000000" />
      </svg>
    </CloseBtn>
  );

const DetailedView = ({ selectedSeriesData, rowData, setDetailViewVisible }: any) => (
    <div style={{ position: 'relative' }}>
        <CloseBtnWrapper {...{ setDetailViewVisible }}/>
        <h2>EPISODE {convertIntToRoman(rowData.episode_id)} - {rowData.title}</h2>
        <div className='image-wrapper'>
            <div><img src={selectedSeriesData.Poster} alt={`${selectedSeriesData.Title} image`} loading="lazy" /></div>
            <div className='content'>{rowData.opening_crawl}</div>
        </div>
        <p>Directed By: {rowData.producer}</p>
    </div>
);

const DetailedViewComp = ({ data: rowData, setDetailViewVisible }:any) => {
    const dispatch = useDispatch();
    const { loading, error, data: selectedSeriesData } = useSelector(selectedSeriesDataSelector);
    useEffect(() =>{
        if (selectedSeriesData.Title?.toLowerCase() !== rowData.title?.toLowerCase())
        dispatch(getSelectedSeriesData({ title: rowData.title, year: rowData.release_date.split('-').at(0) }));
    }, [rowData]);
    
    return (
        <DetailViewWrapper>
            { loading && <div className='loading'><LoadingComponent /></div>}
            {error && <div>Error: {error}</div>}
            { !loading && !error && <DetailedView {...{ selectedSeriesData, rowData, setDetailViewVisible }} />}
        </DetailViewWrapper>
    )
};

export default DetailedViewComp;