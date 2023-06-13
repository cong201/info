import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
    return (
        <div className="bg-gray-800">
            <h1 className="text-6xl text-white ml-6">About Me</h1>
            <p className="text-4xl mb-16 mt-6 text-white ml-6">I have young strength and a little experience of interning at companies !</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-white"
                    contentStyle={{ background: 'rgb(6, 154, 142)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(91, 225, 91)' }}
                    date="2019-2023"
                    iconStyle={{ background: 'rgb(6, 154, 142)' }}
                >
                    <h3 className="vertical-timeline-element-title mt-6 text-4xl">Student</h3>
                    <p className="text-4xl mt-6">
                        HaNoi University of Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-white "
                    contentStyle={{ background: 'rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(91, 225, 91)' }}
                    date="6/2022-9/2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)' }}
                >
                    <h3 className="vertical-timeline-element-title mt-6 text-4xl">Intern Kia-soft</h3>
                    <p>
                        Intern VueJs/Java
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-white"
                    contentStyle={{ background: 'rgb(6, 154, 142)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(91, 225, 91)' }}
                    date="3/2023 - 5/2023"
                    iconStyle={{ background: 'rgb(6, 154, 142)' }}

                >
                    <h3 className="vertical-timeline-element-title mt-6 text-4xl">Intern NashTech</h3>
                    <p>
                        Intern JavaScript (offer from school)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-white"
                    contentStyle={{ background: 'rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2023-?"
                    iconStyle={{ background: 'rgb(33, 150, 243)' }}

                >
                    <h3 className="vertical-timeline-element-title mt-6 text-4xl">Loading...</h3>
                    <p>
                        Loading...Loading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default About;