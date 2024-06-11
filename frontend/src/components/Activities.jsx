import React from "react";

const activities = [
  {
    title: "Craft Production",
    description:
      "Engage in creating handmade crafts, including card-making, plushie/toy making, and beading. This activity enhances creativity and provides an opportunity to develop artistic skills.",
    imgSrc: "/src/assets/craft&design.png", 
  },
  {
    title: "Basic Agriculture",
    description:
      "Learn the basics of agriculture, including the management of poultry and rabbits. This activity teaches essential farming skills and promotes self-sufficiency.",
    imgSrc: "/src/assets/basicagriculture.jpeg", 
  },
  {
    title: "Catering",
    description:
      "Gain hands-on experience in the catering industry, learning about food preparation, cooking, and service. This activity provides valuable skills for a career in the culinary field.",
    imgSrc: "/src/assets/catering.jpeg", 
  },
  {
    title: "Social, Sports & Environmental Activities",
    description:
      "Engage in social, sports, and environmental activities, including tree-planting, clean-ups, and signage at Kitale Museum. These activities promote teamwork and community involvement.",
    imgSrc: "/src/assets/socialsport.jpeg", 
  },
  {
    title: "Business Skills",
    description:
      "Develop essential business skills, including financial management, marketing, and entrepreneurship. This activity prepares participants for starting and managing their own businesses.",
    imgSrc: "/src/assets/bussinessskilss.jpeg", 
  },
  {
    title: "Hair & Beauty Training",
    description:
      "Receive training in hairdressing and beauty treatments. This activity provides the skills needed to pursue a career in the hair and beauty industry.",
    imgSrc: "/src/assets/hair&beauty.jpeg", 
  },
  {
    title: "Plan for Tailoring",
    description:
      "Learn the basics of tailoring, including cutting, sewing, and garment construction. This activity offers the foundation for a career in fashion and design.",
    imgSrc: "/src/assets/tailoring.jpeg", 
  },
  {
    title: "Home Reconnection & Visits",
    description:
      "Facilitate home reconnections and visits for participants, helping them maintain family relationships and support networks. This activity provides emotional and social stability.",
    imgSrc: "/src/assets/reconation.jpeg", 
  },
  {
    title: "Work Experience and Attachments",
    description:
      "Gain practical work experience through attachments in various industries. This activity helps participants build their resumes and gain insight into different career paths.",
    imgSrc: "/src/assets/workexperience.png", 
  },
  {
    title: "Introduction to Computers",
    description:
      "Learn basic computer skills, including using software applications, internet navigation, and digital communication. This activity prepares participants for the digital workplace.",
    imgSrc: "/src/assets/computer.jpeg", 
  },
  {
    title: "Lifeskills & Personal Development",
    description:
      "Participate in training on lifeskills and personal development, addressing issues such as addiction, relationships, and HIV/AIDS. Counseling and testing are provided on-site.",
    imgSrc: "/src/assets/lifeskills.jpeg", 
  },
];

const Activities = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Activities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={activity.imgSrc}
                alt={activity.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
