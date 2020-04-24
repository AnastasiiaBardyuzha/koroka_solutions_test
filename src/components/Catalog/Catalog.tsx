import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

import { coursesCards } from '../../cards';
import { CourseCard } from '../CourseCard/CourseCard';
import './Catalog.scss';

interface Props {
  coursesCards: CourseCard[];
}
const options = [
  { value: 'Russia', label: 'Russia' },
  { value: 'USA', label: 'USA' },
  { value: 'Germany', label: 'Germany' },
];

export const Catalog: FC<Props> = () => {
  const [focusedSearch, setFocusedSearch] = useState(false);
  const [focusedSelect, setFocusedSelect] = useState(false);
  const [valueSearch, setValue] = useState('');
  const [valueSelect, setSelect] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value.replace(/^\s/, ''));
  };

  const focusedInput = (event: React.FocusEvent<HTMLElement>) => {
    const focused = event.target.getAttribute('focused-input');

    switch (focused) {
      case 'focusedSearch':
        setFocusedSearch(true);
        break;

      case 'focusedSelect':
        setFocusedSelect(true);
        break;

      default:
        break;
    }
  };

  const handleValue = (event: any) => {
    if (event) {
      const { value } = event;

      setSelect(value);
    } else {
      setSelect('');
    }
  };

  const unFocused = (value: string, set: (status: boolean) => void) => {
    if (value.length > 0) {
      set(true);
    } else {
      set(false);
    }
  };

  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <div>
            {props.selectProps.menuIsOpen
              ? <img src="images/arrow-up.png" alt="Arrow-up" className="catalog__select-control" />
              : <img src="images/arrow-down.png" alt="Arrow-down" className="catalog__select-control" />}
          </div>
        </components.DropdownIndicator>
      )
    );
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'black',
      cursor: 'pointer',
      background: state.isSelected ? 'url(../images/vector.png) no-repeat 93% center' : 'none',
      backgroundColor: 'none',
      '&:hover': {
        backgroundColor: state.isSelected ? '#f1f1f1' : 'none',
      },
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };


  return (
    <div className="catalog">
      <h2 className="catalog__title">Course catalog</h2>
      <div className="catalog__content">Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account</div>
      <form className="catalog__form form">
        <div className="form__input-wrapper form__input-wrapper_search">
          <img src="./images/search.png" alt="Loupe" className="catalog__search-icon" />
          <label htmlFor="search" className={`form__label catalog__label ${focusedSearch ? 'form__label-focused' : ''}`}>
            Search
          </label>
          <input
            className="catalog__search"
            id="search"
            value={valueSearch}
            focused-input="focusedSearch"
            required
            onFocus={focusedInput}
            onChange={handleChange}
            onBlur={() => unFocused(valueSearch, setFocusedSearch)}
          />
        </div>
        <div
          className="form__input-wrapper catalog__select"
          tabIndex={0}
          role="button"
          onFocus={focusedInput}
          onBlur={() => unFocused(valueSelect, setFocusedSelect)}
          focused-input="focusedSelect"
        >
          <label htmlFor="select" className={`form__label catalog__label-select ${focusedSelect ? 'form__label-focused' : ''}`}>
            Your country
          </label>
          <Select
            id="select"
            className="select"
            classNamePrefix="select"
            components={{ DropdownIndicator }}
            defaultInputValue=""
            isClearable
            placeholder=""
            name="country"
            onFocus={() => setFocusedSelect(true)}
            onChange={handleValue}
            options={options}
            styles={customStyles}
          />
        </div>
      </form>
      <div className="catalog__courses">
        {coursesCards.map(course => <CourseCard key={course.testId} course={course} />)}
      </div>
    </div>
  );
};
