'use client';

import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses, TimelineProps } from '@mui/lab';
import { format } from 'date-fns';
import { SkillBadge, Text } from '@/components';
import { IExperience } from '@/models';

interface IProps extends TimelineProps {
  experiences: IExperience[];
}

export const Timeliner = ({ experiences, ...props }: IProps) => {
  const styles = {
    root: {
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 1,
      },
    },
  };

  return (
    <Timeline
      {...props}
      position={ 'right' }
      sx={styles}
      className={`${props.className}`}
    >
      {experiences.map(({ title, description, company, skills, tags, startDate, endDate }, i) => (
        <TimelineItem key={i}>
          <TimelineContent className='hidden sm:flex flex-col items-left gap-2 py-4'>
            <Text as='h4' className='!text-accentDark dark:!text-accent'>{title} {company ? `at ${company}` : ''}</Text>
            <Text as='p' className='!text-left !text-accentLight dark:!text-darkAccentLight'>{description}</Text>
          </TimelineContent>
          <TimelineSeparator>
            <TimelineDot className='!text-accentLight' />
            <TimelineConnector className={`!text-accentLight h-fit`} />
          </TimelineSeparator>
          <TimelineOppositeContent className={`text-nowrap flex flex-col items-start sm:items-end gap-1 py-4`}>
            <Text as='h4' className='sm:hidden !text-accentDark dark:!text-accent'>{title}</Text>
            <div className="flex sm:hidden gap-1 flex-wrap">
              {tags && tags.map((tag, i) => <Text as='span' className='!text-sm !text-accentDark' key={i} >{tag}{i !== tags.length - 1 && ', '}</Text>)}
            </div>
            <Text as='p' className='!text-left !text-accentLight dark:!text-darkAccentLight'>
              {startDate} - {endDate}             
            </Text>
            <div className="hidden sm:flex justify-end gap-2 flex-wrap">
              {skills.map((skill, i) => <SkillBadge key={i} skill={skill} />)}
            </div>
          </TimelineOppositeContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
};

export default Timeliner;