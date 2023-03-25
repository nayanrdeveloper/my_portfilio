import React from 'react'
import EducationCard from './EducationCard'

function Education() {
    const educationList = [
        {
            degreeName : "Master of Science in Information Technology",
            timePeriod: "2018-2020",
            universityName : "Saurashtra University",
            image : "/saurashtra_university.jpeg",
            collegeAddress: " Saurashtra University Campus, Munjka, Rajkot, Gujarat 360005",
            collegeContact: "https://www.saurashtrauniversity.edu/",
        },
        {
            degreeName : "Post Graduate Diploma in Computer Application",
            timePeriod: "2017-2018",
            universityName : "Harivandana College",
            image : "/harivandana_College.png",
            collegeAddress: "Near, Munjka Road, Saurashtra University Campus, Rajkot, Gujarat 360005",
            collegeContact: "https://www.harivandanacollege.org/",
        },
        {
            degreeName : "Bachelor of Science",
            timePeriod: "2014-2017",
            universityName : "M.&N. Virani Science College- Rajkot",
            image : "/virani_scienece_colle.jpeg",
            collegeAddress: "Kalawad Road, Nandanavan Society, Yogidham, Gurukul, Rajkot, Gujarat 360005",
            collegeContact: "http://vsc.edu.in/",
        },
    ]
  return (
    <div className='mt-3 md:mt-10 p-3 md:p-5 flex flex-col gap-4 md:mx-12' id='education'>
        <p className='text-center text-[#ff014f]'>Master and Bachelor</p>
        <h3 className='text-center text-5xl text-[#3c3e41] dark:text-[#c4cfde]'>Education</h3>
        <div className='mt-5 flex flex-col gap-8'>
            {
                educationList.map((education, index) => {
                    return <EducationCard key={index} data={education} />
                })
            }
        </div>
    </div>
  )
}

export default Education