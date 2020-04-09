import React, { FC } from 'react';

import { coursesCards } from '../../cards';
import { CourseCard } from '../CourseCard/CourseCard';
import './Catalog.scss';

interface Props {
  coursesCards: CourseCard[];
}

export const Catalog: FC<Props> = () => (
  <div className="catalog">
    <h2 className="catalog__title">Course catalog</h2>
    <div className="catalog__content">
      Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account
    </div>
    <form className="catalog__form">
      <input className="catalog__search" />
    </form>
    <div className="catalog__courses">
      {coursesCards.map(course => <CourseCard key={course.testId} course={course} />)}
    </div>
  </div>
);
