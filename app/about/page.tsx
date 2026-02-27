'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Code, GraduationCap, Calendar, MapPin, Award, Download, Globe, ChevronDown, Building2 } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

type TabType = 'experience' | 'skills' | 'education' | 'languages'

const experiences = [
  {
    company: 'Velemento Technologies',
    location: 'Thane, Maharashtra',
    workType: 'On-site',
    totalDuration: 'Present',
    roles: [
      {
        title: 'Software Developer',
        period: '04/2025 - Present',
        duration: 'Present',
        skills: ['Laravel', 'PHP', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'MySQL', 'RESTful APIs', 'MVC Architecture', 'GitHub'],
        tasks: [
          'Designing, developing, and maintaining web applications',
          'Working on scalable and efficient solutions',
          'Collaborating with cross-functional teams',
          'Implementing best practices for code quality',
        ],
        description: 'A passionate and detail-oriented Software Developer with hands-on experience in designing, developing, and maintaining web applications.',
      },
    ],
  },
  {
    company: 'Appdid Infotech',
    location: 'Thane, Maharashtra',
    workType: 'On-site',
    totalDuration: '2 yrs 4 months',
    roles: [
      {
        title: 'Web Developer',
        period: '12/2022 - 03/2025',
        duration: '2 yrs 4 months',
        skills: ['Laravel', 'PHP', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'MySQL', 'RESTful APIs', 'MVC Architecture', 'GitHub', 'Bootstrap', 'jQuery', 'Ajax'],
        tasks: [
          'Developed and maintained multiple Laravel-based web applications',
          'Built RESTful APIs for mobile and web applications',
          'Optimized application performance and database queries',
          'Delivered scalable, user-friendly solutions',
          'Wrote clean, maintainable code following best practices',
        ],
        description: 'Skilled in backend development using PHP (Laravel) and frontend technologies like JavaScript, Vue.js, and Tailwind CSS. Strong understanding of MVC architecture, RESTful APIs, and database design (MySQL). Adept at problem-solving, optimizing application performance, and delivering scalable, user-friendly solutions. Committed to writing clean, maintainable code and continuously learning new technologies to stay updated with modern development practices.',
      },
    ],
  },
  {
    company: 'Iresolve Services',
    location: 'Mumbai, Maharashtra',
    workType: 'On-site',
    totalDuration: '1 yr 1 month',
    roles: [
      {
        title: 'Web Developer',
        period: '11/2021 - 12/2022',
        duration: '1 yr 1 month',
        skills: ['Laravel', 'PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL', 'Ajax', 'GitHub'],
        tasks: [
          'Developed and maintained multiple modules for internal web applications',
          'Improved UI responsiveness and reduced page load time by optimizing queries and front-end components',
          'Collaborated with designers and backend teams to deliver client-focused solutions',
        ],
        description: 'Started my professional journey developing and maintaining web applications, focusing on both frontend and backend development.',
      },
    ],
  },
]

const technicalSkills = {
  'Backend': [
    { name: 'PHP', level: 90 },
    { name: 'Laravel Framework', level: 88 },
    { name: 'MySQL', level: 85 },
  ],
  'Frontend': [
    { name: 'JavaScript', level: 85 },
    { name: 'Bootstrap 5', level: 88 },
    { name: 'Tailwind CSS', level: 87 },
    { name: 'jQuery', level: 82 },
    { name: 'AJAX', level: 80 },
  ],
  'Tools & Technologies': [
    { name: 'GitHub', level: 85 },
    { name: 'Vue.js', level: 75 },
  ],
}

const education = [
  {
    degree: 'Bsc IT',
    field: 'Information Technology',
    institution: 'Mumbai University',
    location: 'Mumbai, Maharashtra',
    period: '2019 - 2021',
    grade: 'Graduated',
    achievements: [
      'Completed Bachelor of Science in Information Technology',
      'Gained comprehensive knowledge in web development and programming',
      'Developed strong foundation in software development principles',
    ],
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>('experience')
  const [expandedTasks, setExpandedTasks] = useState<{ [key: string]: boolean }>({})

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Ishwari_Pawar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const languages = [
    { name: 'English', level: 4, maxLevel: 5 },
    { name: 'Hindi', level: 5, maxLevel: 5 },
    { name: 'Marathi', level: 5, maxLevel: 5 },
  ]

  const tabs = [
    { id: 'experience' as TabType, label: 'Experience', icon: Briefcase },
    { id: 'skills' as TabType, label: 'Technical Skills', icon: Code },
    { id: 'education' as TabType, label: 'Education', icon: GraduationCap },
    { id: 'languages' as TabType, label: 'Languages', icon: Globe },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12 group text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gradient-primary">
                About Me
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
                A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
              </p>
            </div>
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 glass-strong border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-premium text-sm sm:text-base touch-manipulation"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-white/10 pb-3 sm:pb-4 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base touch-manipulation whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30 shadow-glow'
                      : 'text-gray-400 hover:text-white glass hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {experiences.map((company, companyIndex) => {
                  const companyInitial = company.company.charAt(0).toUpperCase()
                  const colors = [
                    'from-yellow-400 to-green-400',
                    'from-red-400 to-pink-400',
                    'from-blue-400 to-cyan-400',
                  ]
                  const colorClass = colors[companyIndex % colors.length]
                  
                  return (
                    <motion.div
                      key={companyIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
                      className="glass-strong rounded-2xl p-4 sm:p-6 md:p-8 shadow-premium"
                    >
                      {/* Company Header */}
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0`}>
                          {companyInitial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{company.company}</h3>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                              {company.totalDuration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span className="truncate">{company.location}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Building2 size={12} className="sm:w-3.5 sm:h-3.5" />
                              {company.workType}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline with Roles */}
                      <div className="relative pl-6 sm:pl-8">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50" />
                        
                        {company.roles.map((role, roleIndex) => {
                          const roleKey = `${companyIndex}-${roleIndex}`
                          const isExpanded = expandedTasks[roleKey] || false
                          
                          return (
                            <motion.div
                              key={roleIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                              className="relative mb-6 sm:mb-8 last:mb-0"
                            >
                              {/* Timeline Marker */}
                              <div className="absolute -left-8 sm:-left-11 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 sm:border-4 border-gray-900 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                              </div>

                              {/* Role Card */}
                              <div className="glass rounded-xl p-4 sm:p-6 hover:bg-white/5 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                                  <div className="flex-1">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{role.title}</h4>
                                    <div className="flex flex-wrap items-center gap-2 text-gray-400 text-xs sm:text-sm">
                                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                                      <span>{role.period}</span>
                                      {role.duration && (
                                        <>
                                          <span>•</span>
                                          <span>{role.duration}</span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Description */}
                                {role.description && (
                                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                                    {role.description}
                                  </p>
                                )}

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                  {role.skills.map((skill, skillIndex) => (
                                    <span
                                      key={skillIndex}
                                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>

                                {/* Tasks/Responsibilities - Expandable */}
                                {role.tasks && role.tasks.length > 0 && (
                                  <div>
                                    <button
                                      onClick={() => setExpandedTasks(prev => ({
                                        ...prev,
                                        [roleKey]: !prev[roleKey]
                                      }))}
                                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-3 py-2 touch-manipulation w-full sm:w-auto"
                                    >
                                      <ChevronDown 
                                        size={16} 
                                        className={`transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                                      />
                                      <span className="font-medium text-xs sm:text-sm">Tasks / Responsibilities</span>
                                    </button>
                                    <AnimatePresence>
                                      {isExpanded && (
                                        <motion.ul
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="space-y-2 overflow-hidden"
                                        >
                                          {role.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                                              <Award size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                                              <span>{task}</span>
                                            </li>
                                          ))}
                                        </motion.ul>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="glass-strong rounded-2xl p-8 shadow-premium"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-premium"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-xl text-blue-400 mb-2">{edu.field}</p>
                        <p className="text-lg text-gray-300">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-blue-400 font-medium">{edu.grade}</span>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <Award size={18} className="text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'languages' && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-strong rounded-2xl p-8 shadow-premium"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
                  <div className="space-y-6">
                    {languages.map((lang, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 font-medium text-lg">{lang.name}</span>
                          <span className="text-gray-400 text-sm">{lang.level}/{lang.maxLevel}</span>
                        </div>
                        <div className="flex gap-2">
                          {Array.from({ length: lang.maxLevel }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                i < lang.level
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                  : 'bg-white/10'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}

