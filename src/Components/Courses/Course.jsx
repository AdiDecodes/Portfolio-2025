import React, {
	useEffect,
	useState,
} from 'react';
import styles from './course.module.scss';
import js from '../../assets/Course/JSHERO.png';
import { MdArrowRightAlt } from 'react-icons/md';

const Course = () => {
	const [courseData, setCourseData] = useState([
		{
			id: 1,
			title: 'Javascript Hero',
			shortDescription:
				'Master Javascript from scratch with a real world project in less than 6 Hours! Perfect to get started with web development. Crafted for Absoulte Beginners!',
			thumbnail: js,
			tutor: 'Aditya Singh',
			chapters: '20 Chapters',
			duration: '6 Hours',
			price: '***',
			flashTag: ['COMING SOON'],
			tags: [
				'Beginner',
				'Javascript',
				'Web Development',
			],
		},
		{
			id: 2,
			title: 'React Essentials',
			shortDescription:
				'Become a Qualtiy React Developer in no time. Learn Optimization techniques, best practices, custom component optimization and much more in just one video!',
			thumbnail: js,
			tutor: 'Aditya Singh',
			price: 499,
			chapters: '1 Chapter',
			duration: '1 Hour',
			flashTag: ['NEW'],
			tags: [
				'Intermediate',
				'React',
				'Web Development',
			],
		},
	]);
	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>COURSES</h2>
				<p>Top Courses I've crafted</p>
			</div>
			<div className={styles.courseWrapper}>
				{courseData.map((item) => {
					return (
						<div
							key={item.id}
							className={styles.course}
						>
							<div className={styles.imageWrapper}>
								<img
									src={item.thumbnail}
									alt=''
								/>
								<div className={styles.flashTag}>
									<p>{item.flashTag[0] || ''} </p>
								</div>
							</div>
							<div className={styles.tagsWrapper}>
								{item.tags.map((tag) => {
									return (
										<div
											key={tag}
											className={styles.tag}
										>
											<p>{tag}</p>
										</div>
									);
								})}
							</div>
							<div className={styles.titleWrapper}>
								<h2>{item.title}</h2>
								<p>{`${item.chapters} | ${item.duration}`}</p>
								<p>{item.shortDescription}</p>
							</div>
							<div className={styles.buyButton}>
								<p>₹ {item.price} /-</p>
								<div
									className={styles.arrowContainer}
									data-hide-cursor='true'
								>
									<p>
										{item.price > 0
											? 'BUY NOW'
											: item.price === 0
											? 'GET NOW'
											: 'COMING SOON'}{' '}
									</p>
									<MdArrowRightAlt />
								</div>
							</div>
						</div>
					);
				})}
				<div className={styles.seeAll}>
					<p>
						SEE ALL <br />
						COURSES
					</p>
					<MdArrowRightAlt />
				</div>
			</div>
		</div>
	);
};

export default Course;
