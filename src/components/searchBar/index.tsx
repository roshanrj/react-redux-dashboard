import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    background-color: #e9e9e9;
    display: flex;
    padding: 10px;
    input[type=text] {
        font-size: 1.2rem;
        flex-grow: 1; 
  }
  button{
    padding: 6px 10px;
    background: #ddd;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
  }
   button:hover{background: #ccc;} 
  .topnav input[type=text] {
    border: 1px solid #ccc; 
    
  }
`;
type searchBarProps = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    onSortByClickCB: (value: string) => void,
}
const SearchBar: React.FC<searchBarProps> = ({ name, setName, onSortByClickCB }) => {
  const [visibleSortBy, setVisibleSortBy] = useState(false);
  const [sortBy, setSortBy] = useState<string>('');

  const onChangeHandler = ({target:{ value }}:any) => {
    setSortBy(value); 
    onSortByClickCB(value);
  };
    return (
        <SearchBarWrapper className="seach-wrapper">
          <button type="button" onClick={() => setVisibleSortBy((prev) => !prev)}>Sort By...</button>
          {visibleSortBy && (<div>
          <fieldset>
            <label><input type="checkbox" name="sortBy" value="year" checked={sortBy === 'year'} onChange={onChangeHandler} /> Year</label>
            <label><input type="checkbox" name="sortBy" value="episode" checked={sortBy === 'episode'} onChange={onChangeHandler} /> Episode</label>
          </fieldset>
          </div>)}
          <input type="text" placeholder="Search by episode or title..." name="search" value={name} onChange={({target: { value }}) => setName(value)} />
        </SearchBarWrapper>
    );
};

export default SearchBar;