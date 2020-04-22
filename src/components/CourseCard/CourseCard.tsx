import React, { FC } from 'react';

import './CourseCard.scss';

interface Props {
  course: CourseCard;
}

export const CourseCard: FC<Props> = ({ course }) => {
  const {
    name,
    authorImg,
    courseImg,
    title,
    lessons,
    tasks,
    minutes,
    progress,
  } = course;

  return (
    <div className="course">
      <div className="course__cover">
        <img src={courseImg} alt="Course cover" className="course__img" />
        <div className="course__author">
          <img src={authorImg} alt="Author" className="course__author-photo" />
          <span>{name}</span>
        </div>
      </div>
      <div className="course__progress">
      </div>
      <div className="course__progress-text">
        {`Progress ${progress}%`}
      </div>
      <div className="course__content">
        <h3 className="course__title">{title}</h3>
        <div className="course__info">
          <div className="course__lessons">
            <img src="images/courses/course_icons/lessons.png" alt="Mortarboard" className="course__info-img" />
            <span>{`${lessons} lessons`}</span>
          </div>
          <div className="course__lessons">
            <img src="images/courses/course_icons/tasks.png" alt="Pen" className="course__info-img" />
            <span>{`${tasks} tasks`}</span>
          </div>
          <div className="course__lessons">
            <img src="images/courses/course_icons/video.png" alt="Play button" className="course__info-img" />
            <span>{`${minutes} minutes`}</span>
          </div>
        </div>
        <div className="course__buttons">
          <button
            type="button"
            className="course__button course__button_continue"
          >
            Continue
          </button>
          <button
            type="button"
            className="course__button course__button_more"
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};
