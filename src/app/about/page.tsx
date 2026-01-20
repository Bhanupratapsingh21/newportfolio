"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Schema,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: "Current Status & Skills", display: true, items: ["Social Links", "Technical Skills"] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map((exp) => exp.company) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map((inst) => inst.name) },
   
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      {/* Table of Contents - Hidden on mobile */}
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
          position="fixed"
          paddingLeft="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} gap="64">
        {/* LEFT COLUMN: Profile & Tech Stack */}
        <Column
          flex={3}
          gap="32"
          position="sticky"
          top="80"
          fitHeight
          s={{ position: "relative", top: "0" }}
        >
          <Column horizontal="center" gap="16">
            <Avatar src={person.avatar} size="xl" style={{ border: '4px solid var(--neutral-alpha-medium)' }} />


            {/* Social Buttons with better spacing */}
            <Row gap="8" wrap horizontal="center">
              {social.filter(s => s.essential).map((item) => (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  variant="secondary"
                  size="m"
                  tooltip={item.name}
                />
              ))}
            </Row>
          </Column>

          <Line />

          {/* Enhanced Technical Skills Section */}
          {about.technical.display && (
            <Column gap="24">
              <Text variant="label-strong-m" onBackground="neutral-weak" style={{ letterSpacing: '1px' }}>
                TECH STACK
              </Text>
              <Column gap="20">
                {about.technical.skills.map((skill, index) => (
                  <Column key={index} gap="8">
                    <Text variant="body-default-s" weight="default">{skill.title}</Text>
                    <Row wrap gap="4">
                      {skill.tags?.map((tag, tIndex) => (
                        <Tag key={tIndex} size="s" variant="neutral" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  </Column>
                ))}
              </Column>
            </Column>
          )}
        </Column>

        {/* MAIN CONTENT: The "Resume" View */}
        <Column flex={9} gap="80">
          {/* Header & Pitch */}
          <Column id={about.intro.title} gap="24">
            {about.calendar.display && (
              <Row
                fitWidth
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                paddingLeft="16"
                gap="12"
                vertical="center"
                style={{ border: '1px solid var(--brand-alpha-medium)' }}
              >
                <Text variant="label-default-s" onBackground="brand-weak">Schedule a call</Text>
                <IconButton
                  href={about.calendar.link}
                  variant="primary"
                  icon="chevronRight"
                  size="s"
                />
              </Row>
            )}
            <Column gap="8">
              <Heading variant="display-strong-xl">{person.name}</Heading>
              <Heading variant="label-strong-xl" onBackground="neutral-weak">
                {person.role}
              </Heading>
            </Column>
            <Text variant="body-default-l" onBackground="neutral-medium" style={{ lineHeight: '1.8' }}>
              {about.intro.description}
            </Text>
          </Column>

          {/* Work Experience Section with "Timeline" Feel */}
          {about.work.display && (
            <Column gap="32" id={about.work.title}>
              <Heading variant="display-strong-s">{about.work.title}</Heading>
              <Column gap="48">
                {about.work.experiences.map((experience, index) => (
                  <Row key={index} gap="24">
                    {/* Left Timeline Indicator */}
                    <Column horizontal="center" s={{ hide: true }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--brand-solid)', marginTop: '8px' }} />
                      <div style={{ width: '2px', flex: 1, background: 'var(--neutral-alpha-medium)', marginTop: '8px' }} />
                    </Column>
                    <Column fillWidth gap="12">
                      <Row horizontal="between" vertical="center" wrap>
                        <Text variant="heading-strong-l">{experience.company}</Text>
                        <Tag variant="neutral" size="s">{experience.timeframe}</Tag>
                      </Row>
                      <Text variant="body-default-m" onBackground="brand-weak" weight="default">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="12" paddingLeft="16">
                        {experience.achievements.map((achievement, i) => (
                          <Text as="li" key={i} variant="body-default-m" onBackground="neutral-medium">
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                      {experience.images && experience.images.length > 0 && (
                        <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                          {experience.images.map((image, index) => (
                            <Row
                              key={index}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          ))}
                        </Row>
                      )}
                    </Column>

                  </Row>

                ))}

              </Column>
            </Column>
          )}
        </Column>
      </Row>
    </Column>
  );
}