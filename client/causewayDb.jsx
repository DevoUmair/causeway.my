import { IoIosHome } from 'react-icons/io'

//Sub Banner Image
import banner01 from './src/assets/banner/subBanner01.png'
import banner02 from './src/assets/banner/subBanner02.png'
import banner03 from './src/assets/banner/subBanner03.png'
import banner04 from './src/assets/banner/subBanner04.png'

// Footer Icon
import { MdPerson } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { RiUserSettingsFill } from 'react-icons/ri'
import { GoPasskeyFill } from 'react-icons/go'

import AboutN from './src/assets/nav/AboutUs.png'
import ContactN from './src/assets/nav/Contact.png'
import HomeN from './src/assets/nav/Home.png'
import ServiceN from './src/assets/nav/Service.png'
import HowItWorkN from './src/assets/nav/HowItWork.png'

//Bottom Bar Icon
import About from './src/assets/nav/AboutUs.png'
import Contact from './src/assets/nav/Contact.png'
import Home from './src/assets/nav/Home.png'
import Service from './src/assets/nav/Service.png'

//Bottom Bar Active Icon
import HomeActive from './src/assets/nav/home-Active.png'
import AboutActive from './src/assets/nav/About-Active.png'
import ContactActive from './src/assets/nav/Contact-Active.png'
import ServiceActive from './src/assets/nav/Service-Active.png'


//HowIt
import howit01 from './src/assets/HowIt/howit-01.png'
import howit02 from './src/assets/HowIt/howit-02.png'
import howit03 from './src/assets/HowIt/howit-03.png'
import howit04 from './src/assets/HowIt/howit-04.png'

import icon01 from './src/assets/HowIt/location.svg'
import icon02 from './src/assets/HowIt/verifi.svg'
import icon03 from './src/assets/HowIt/chooseVehi.svg'
import icon04 from './src/assets/HowIt/book.svg'

//Blogs

import blog01 from './src/assets/blogs/blog-05.webp'
import blog02 from './src/assets/blogs/blog-03.jpg'
import blog03 from './src/assets/blogs/blog-01.jpg'
import blog04 from './src/assets/blogs/blog-04.jpg'

export const pages = {
    home : {
        name : 'home',
        page : 'Home',
        description : '',
        img : '',
        footerIcon : <IoIosHome size={18} />,
        bottomBarIcon : Home,
        bottomBarIconActive : HomeActive ,
        navIcon : HomeN
    },
    about : {
        name : 'about',
        page : 'About Us',
        description : 'Everything You Need To Know About Causeway',
        img : banner01,
        footerIcon : <MdPerson size={18} />,
        bottomBarIcon : About,
        bottomBarIconActive : AboutActive,
        navIcon : AboutN
    },
    contact : {
        name : 'contact',
        page : 'Contact',
        description : 'Everything You Need To Know About Causeway',
        img : banner02,
        footerIcon : <BiSolidPhoneCall size={18} />,
        bottomBarIcon : Contact,
        bottomBarIconActive : ContactActive,
        navIcon : ContactN
    },
    services : {
        name : 'services',
        page : 'Services',
        description : 'Everything You Need To Know About Causeway',
        img : banner03,
        footerIcon : <RiUserSettingsFill size={17} />,
        bottomBarIcon : Service,
        bottomBarIconActive : ServiceActive,
        navIcon : ServiceN
    },
    HowItWorks : {
        name : 'how-it-works',
        page : 'How It Works',
        description : 'Everything You Need To Know About Causeway',
        img : banner04,
        footerIcon :  <GoPasskeyFill size={17} />,
        bottomBarIcon : '',
        bottomBarIconActive : '',
        navIcon : HowItWorkN
    },
    TermsAndCondtion : {
        name : 'terms-and-condition',
        page : 'Terms And Condition',
        description : 'Everything You Need To Know About Causeway',
        img : banner04,
        footerIcon :  '',
        bottomBarIcon : '',
        bottomBarIconActive : '',
        navIcon : ''
    },
    PrivacyPolicy : {
        name : 'privacy-policy',
        page : 'Privacy Policy',
        description : 'Everything You Need To Know About Causeway',
        img : banner04,
        footerIcon :  '',
        bottomBarIcon : '',
        bottomBarIconActive : '',
        navIcon : ''
    },
    BlogDetail : {
        name : 'blog',
        page : 'Blog',
        description : '',
        img : '',
        footerIcon :  '',
        bottomBarIcon : '',
        bottomBarIconActive : '',
        navIcon : ''
    },
    Vehicle : {
        name : 'causeway-vehicles',
        page : 'All Vehicles',
        description : 'Everything You Need To Know About Causeway',
        img : banner04,
        footerIcon :  '',
        bottomBarIcon : '',
        bottomBarIconActive : '',
        navIcon : ''
    },
    BookNow : {
        name : 'causeway-booking',
        page : 'Book Now',
        description : 'Everything You Need To Know About Causeway',
        img : banner01,
        footerIcon :  '',
        bottomBarIcon : '',
        bottomBarIconActive : '',
        navIcon : ''
    }
}

export const allPages = [pages.home , pages.about , pages.contact , pages.services , pages.HowItWorks]

export const sections = [
    {
      id : 1,
      title: "Acceptance of Terms",
      content: "Irure eu aute reprehenderit sunt ipsum do Lorem ea fugiat nulla cillum mollit Lorem. Eiusmod ex nostrud qui laborum et cupidatat minim aute occaecat labore duis. Occaecat consectetur anim aliquip duis ad commodo veniam officia adipisicing in.",
      items: [
        {
          title: "Accuracy of Information",
          description: "You are responsible for providing accurate, current, and complete information when using our services. Any discrepancies may result in service limitations or termination."
        },
        {
          title: "Compliance with Policies",
          description: "All users must comply with the terms and conditions, as well as privacy and usage policies, to ensure secure and reliable service for all."
        }
      ]
    },
    {
      id : 2,  
      title: "Services Provided",
      content: "We offer a range of digital services including but not limited to social media management, content creation, and digital marketing strategy. Our services are designed to enhance your digital presence.",
      items: [
        {
          title: "Customizable Packages",
          description: "Our services are offered as part of customizable packages tailored to meet the unique needs of each client."
        },
        {
          title: "24/7 Support",
          description: "Our dedicated support team is available 24/7 to assist with any queries or technical support."
        }
      ]
    },
    {
      id : 3,
      title: "User Responsibilities",
      content: "As a user, you are expected to use our services responsibly, respecting intellectual property, security protocols, and privacy standards.",
      items: [
        {
          title: "Prohibited Activities",
          description: "Users should refrain from activities that may harm or disrupt our services, such as unauthorized access or misuse of resources."
        },
        {
          title: "Confidentiality",
          description: "Users are responsible for maintaining the confidentiality of their account details to prevent unauthorized access."
        }
      ]
    },
    {
      id : 4,
      title: "Account Security",
      content: "Account security is paramount, and we implement robust security measures to safeguard user information.",
      items: [
        {
          title: "Two-Factor Authentication",
          description: "We highly recommend enabling two-factor authentication for enhanced account security."
        },
        {
          title: "Secure Passwords",
          description: "Users should create strong, unique passwords for their accounts and avoid sharing them with others."
        }
      ]
    },
    {
      id : 5,
      title: "Payment and Fees",
      content: "Payments for our services are due in full prior to project initiation unless otherwise specified. All fees are non-refundable unless otherwise stated.",
      items: [
        {
          title: "Payment Terms",
          description: "Payments can be made via secure online payment systems or bank transfers as agreed upon at the time of contracting."
        },
        {
          title: "Late Fees",
          description: "Late payments may incur additional fees or service interruptions until payment is completed."
        }
      ]
    },
    {
      id : 6,
      title: "Cancellation and Refunds",
      content: "Cancellations and refunds are subject to terms that vary depending on the nature of the service. Refund requests are handled on a case-by-case basis.",
      items: [
        {
          title: "Cancellation Policy",
          description: "Cancellations must be requested within the stipulated time frame to be eligible for partial or full refunds."
        },
        {
          title: "Refund Eligibility",
          description: "Refunds are generally issued if services have not yet been rendered or if there is a failure on our part to fulfill the terms."
        }
      ]
    },
    {
      id : 7,
      title: "Intellectual Property",
      content: "All content, designs, and trademarks provided by us are protected by intellectual property laws. Unauthorized use or distribution is prohibited.",
      items: [
        {
          title: "Usage Rights",
          description: "Clients are granted limited usage rights based on the terms of each service package."
        },
        {
          title: "Ownership of Content",
          description: "Ownership of custom-created content may be transferred to clients upon completion of the project and full payment."
        }
      ]
    },
    {
      id : 8,
      title: "Limitation of Liability",
      content: "We are not liable for any damages or losses arising from the use or inability to use our services, except as required by law.",
      items: [
        {
          title: "Service Limitations",
          description: "Our liability is limited to the amount paid for the services, excluding third-party charges or incidental expenses."
        },
        {
          title: "Exclusions",
          description: "We are not responsible for losses due to external factors beyond our control, such as internet outages or third-party disruptions."
        }
      ]
    }
  ];


  export const howItWorksContent = [
    {
      title: "Select Your Vehicle",
      description: "Explore our extensive selection of vehicles, which includes a variety of models ranging from budget-friendly economy cars to high-end luxury vehicles. Whether you need a compact car for city driving, a spacious SUV for family outings, or a premium vehicle for business travel, our user-friendly online catalog lets you filter by car type, price range, features, and more. You can compare models, read customer reviews, and examine each vehicle's specifications to ensure that you find the ideal car for your trip across Malaysia.",
      summary: "Easily select a car to match your travel needs.",
      img: howit01,
      icon:icon01
    },
    {
      title: "Book Online",
      description: "Our online booking system is designed to make your reservation experience quick and easy. Begin by entering your desired pickup and drop-off locations, followed by your rental dates and times. Our system will display available vehicles for your chosen period, along with clear pricing and rental terms. Once you've selected your vehicle, simply confirm your booking details, review your rental agreement, and enjoy peace of mind knowing that your car will be ready when you need it. The entire process takes just a few minutes and can be completed from any device, anytime.",
      summary: "Hassle-free online booking process.",
      img: howit02,
      icon:icon02
    },
    {
      title: "Verify & Pay",
      description: "After confirming your booking, you’ll need to verify your reservation details, including your personal information, rental dates, and selected vehicle. We offer multiple secure payment options to make your experience as convenient and stress-free as possible. Choose from major credit cards, debit cards, or digital payment methods to complete your transaction. Our payment portal is protected by advanced encryption to ensure the safety of your financial information, allowing you to complete the payment with confidence and ease.",
      summary: "Quick, secure payment options.",
      img: howit03,
      icon:icon03
    },
    {
      title: "Pick Up Your Car",
      description: "On the day of your rental, head to the designated pickup location at your scheduled time, where our staff will greet you and assist with the handover process. Before you drive off, our team will guide you through a brief vehicle inspection to confirm its condition. We’ll also provide you with all necessary documentation and ensure you understand the vehicle’s features, especially if it's equipped with GPS or advanced safety systems. Your car will be fully fueled, cleaned, and ready to go, so you can start your journey without any delays or hassles.",
      summary: "Convenient pickup service at your preferred location.",
      img: howit04,
      icon:icon04
    },
    {
      title: "Enjoy Your Journey",
      description: "Embark on your adventure across Malaysia with one of our high-quality rental vehicles, meticulously maintained for your safety and comfort. Each vehicle is equipped with essential amenities, and many include features like GPS navigation to help you find your way easily. Whether you're traveling for work, leisure, or both, our vehicles are designed to provide a smooth and enjoyable ride. If you encounter any issues on the road, our dedicated customer service team is available 24/7 to provide roadside assistance and support, so you can travel with peace of mind.",
      summary: "Enjoy a smooth and comfortable drive.",
      img: howit01,
      icon:''
    },
    {
      title: "Return the Vehicle",
      description: "When your rental period ends, simply return the car to the agreed-upon drop-off location. Our efficient return process is designed to be quick and straightforward, allowing you to conclude your rental experience without unnecessary delays. Upon return, our team will perform a brief inspection of the vehicle and finalize any remaining paperwork. You’ll receive a confirmation email with a summary of your rental charges, and our staff will be available to answer any final questions or address concerns, ensuring a seamless and satisfying end to your rental journey.",
      summary: "Simple, efficient return process.",
      img: howit02,
      icon:''
    }
  ];
  
  

export  const rentalTerms = [
    {
      id : 1,
      title: "Eligibility and Driver Requirements",
      description: "Defines the minimum qualifications that a renter and any additional drivers must meet to be eligible for renting a vehicle.",
      subTopics: [
        {
          title: "Age and License Validity",
          content: "The renter must meet a minimum age requirement of 21, although for certain types of vehicles, including luxury and high-performance cars, the minimum age may be set at 25 or older. Renters must also hold a valid, government-issued driver’s license in good standing, free from suspensions, revocations, or major violations in the recent past. For international travelers, an International Driving Permit (IDP) may be required alongside their local license. Failure to meet these criteria may lead to rental denial or cancellation. These age and license policies are in place to ensure the safety of both the renter and the vehicle."
        },
        {
          title: "Required Driving Experience",
          content: "To ensure safe handling of rental vehicles, renters must have at least two years of verified driving experience. This requirement is intended to confirm that the renter has a basic level of competency and familiarity with driving rules and vehicle handling. The rental company may request verification of this experience and may deny rental access if the individual lacks sufficient driving history. Additionally, renters with a recent history of serious traffic violations, such as reckless driving or DUI, may also be ineligible to rent. This is to help reduce risks to the renter, the vehicle, and the general public."
        },
        {
          title: "Additional Driver Qualifications",
          content: "Additional drivers must meet the same eligibility criteria as the primary renter, including age, license validity, and driving experience. Each additional driver must be listed on the rental agreement, present a valid driver’s license, and may be subject to a daily fee. Only authorized drivers listed on the agreement are permitted to drive the rental vehicle. If any unauthorized person operates the vehicle, insurance may be voided, and full liability may fall on the primary renter. This policy helps ensure accountability and safety for all vehicle users."
        }
      ]
    },
    {
      id : 2,
      title: "Rental Duration and Modifications",
      description: "Outlines policies regarding the rental period, including standard duration, requests for extensions, and implications of early returns.",
      subTopics: [
        {
          title: "Standard Rental Duration",
          content: "The rental period is typically calculated on a 24-hour cycle and is agreed upon in advance at the time of booking. Rental rates are applied per day or week, depending on the chosen duration, with additional terms for weekends or holidays due to higher demand. The renter must return the vehicle by the agreed time to avoid additional charges. Extended rentals beyond the reserved period without prior approval may result in extra fees or penalties. Clarifying the return time is essential, as unauthorized late returns may affect availability for other customers."
        },
        {
          title: "Extension and Renewal Requests",
          content: "Renters wishing to extend their rental period must contact the rental company at least 24 hours before the scheduled return time. Extensions are subject to vehicle availability, and rates may vary based on the extended timeframe and current demand. Failure to request an extension before the return time may result in late fees, calculated on an hourly or daily basis. Unauthorized extensions may lead to additional penalties or possible reporting of the vehicle as missing. Advance communication helps ensure proper coverage and cost adjustments."
        },
        {
          title: "Policy on Early Returns",
          content: "If a renter decides to return the vehicle before the agreed-upon rental period ends, they may not be eligible for a refund or rate adjustment for the unused days, depending on the terms of the agreement. In some cases, early returns may incur an additional fee if the rental was part of a special promotion. Renters are advised to review the specific early-return policy, as adjustments for early returns are not typically guaranteed. This policy allows the rental company to manage inventory and availability effectively."
        }
      ]
    },
    {
      id : 3,
      title: "Vehicle Condition and Usage",
      description: "Details the responsibilities of the renter for vehicle condition, acceptable usage, and limitations on how and where the vehicle can be operated.",
      subTopics: [
        {
          title: "Inspection at Pickup and Return",
          content: "The renter is responsible for inspecting the vehicle thoroughly before accepting it. This inspection should include checking for any existing damage, confirming mileage, and verifying the fuel level. Any pre-existing damage should be reported to the rental company before leaving the premises to avoid later disputes. The vehicle should be returned in similar condition to how it was rented, with any excessive wear or new damage subject to additional charges. This inspection policy helps ensure transparency and accountability for both the rental company and the renter."
        },
        {
          title: "Prohibited Vehicle Uses",
          content: "The rental vehicle may only be used for lawful purposes on designated roadways and is strictly prohibited from certain activities. These include racing, off-road driving, or using the vehicle for any form of commercial use, such as ride-sharing or delivery, unless specifically permitted. The vehicle should not be driven into restricted areas, including unpaved roads, hazardous regions, or across certain national borders without prior approval. Failure to comply with these limitations can lead to penalties, voiding of insurance, and the renter assuming full financial responsibility for damages."
        },
        {
          title: "Routine Maintenance and Reporting",
          content: "The rental company is responsible for ensuring the vehicle is in safe, operational condition before each rental. Renters are expected to report any mechanical issues or malfunctions immediately to the rental company. Unauthorized repairs or alterations to the vehicle by the renter are not allowed, as they may interfere with warranties and could lead to additional costs. If a breakdown occurs, the rental company will arrange for assistance or a replacement vehicle, when possible. This policy helps maintain vehicle quality and ensures renters have support if mechanical issues arise."
        }
      ]
    },
    {
      id : 4,
      title: "Insurance and Liability Protection",
      description: "Describes the requirements and options for insurance coverage, as well as the renter's liability for damages or accidents involving the rental vehicle.",
      subTopics: [
        {
          title: "Mandatory Liability Insurance",
          content: "All renters are required to have liability insurance that covers injuries to third parties and damage to their property. This can come from the renter’s personal insurance policy, credit card insurance benefits, or rental-specific insurance offered by the rental company. Proof of coverage must be presented at the time of rental. If adequate insurance is not provided, the renter may be denied the vehicle. Liability insurance protects both the renter and the rental company from potential legal claims arising from accidents."
        },
        {
          title: "Optional Damage Coverage",
          content: "The rental company offers optional collision damage waivers (CDWs) and other damage insurance options that limit the renter’s financial responsibility in the event of an accident or damage to the rental vehicle. However, this coverage may have exclusions, such as damages resulting from reckless driving, unauthorized use, or negligence. Renters should review these terms closely to understand their coverage limits and conditions, as non-compliance could void the protection and make the renter fully responsible for repair costs."
        },
        {
          title: "Accident and Theft Liability",
          content: "If an accident, theft, or other incident occurs, the renter must report the event immediately to the rental company and, where applicable, to law enforcement. The renter is responsible for cooperating in any required investigations and providing accurate details. Liability for any damages or losses not covered by insurance, including deductibles, rests with the renter. Authorized drivers are also covered, provided they are listed on the rental agreement. Failure to comply may result in additional penalties and full liability for damages."
        }
      ]
    },
    {
      id : 5,
      title: "Payment, Deposits, and Penalties",
      description: "Specifies the payment process, security deposit requirements, and possible penalties for late returns, damages, and violations of the rental agreement.",
      subTopics: [
        {
          title: "Payment Methods and Schedule",
          content: "Payment is generally due at the start of the rental period and may be required in advance for peak season bookings or high-demand vehicle types. Accepted payment methods typically include major credit or debit cards, though some vehicle categories may require specific payment types or pre-authorization. Additional fees, such as those for additional drivers or insurance add-ons, may apply. The rental company reserves the right to request pre-authorizations to cover potential damages or incidentals, ensuring all charges can be settled at the end of the rental period."
        },
        {
          title: "Security Deposit Policies",
          content: "A refundable security deposit may be required, held as collateral against potential damages, cleaning fees, or any outstanding charges. The deposit amount varies depending on vehicle type and renter history and is often collected through a credit card authorization. Upon satisfactory return of the vehicle in its original condition, the deposit will be refunded, though processing times vary by financial institution. If the vehicle incurs any damages or cleaning fees, deductions may be made from this deposit before the remainder is refunded."
        },
        {
          title: "Penalties for Late Returns",
          content: "Vehicles returned after the scheduled time may incur additional late charges. Fees are often calculated hourly for the first few hours, followed by a full-day rate if the delay exceeds a certain period. Other penalties may include charges for lost keys, traffic violations, or returning the vehicle in an unsatisfactory condition. Unauthorized prolonged use or failure to communicate a delayed return may lead to the vehicle being reported missing, with potential legal consequences. This policy helps ensure timely returns and vehicle availability for other customers."
        }
      ]
    }
  ];
  

  export const privacyPolicy = [
    {
      id:1,
      title: "Introduction",
      content: [
        "At [Your Car Rental Company Name] (“we,” “us,” or “our”), protecting your privacy is our priority. We understand the importance of keeping your personal information secure and are committed to safeguarding your data. We comply with Malaysia’s Personal Data Protection Act (PDPA) 2010, which sets out the rules for how we collect, store, process, and share your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our services, including booking a car rental, visiting our website, or contacting us for customer support. We encourage you to read through this policy carefully to understand our data handling practices and the steps we take to protect your privacy.By using our services or accessing our website, you consent to the collection, use, and disclosure of your personal data as described in this Privacy Policy."
      ]
    },
    {
      id:2,
      title: "Information We Collect",
      content: [
        {
          subTitle: "Personal Identification Details",
          text: "When you rent a vehicle, we require your personal identification information to verify your identity and eligibility to rent a vehicle. This includes your full name, residential address, contact number, email address, and identification documents such as your Malaysian IC (Identity Card), passport (for non-Malaysian customers), and a valid driver’s license. This information is necessary for our records and to ensure compliance with our rental policies."
        },
        {
          subTitle: "Financial and Payment Information",
          text: "To process your bookings and payments securely, we collect financial information such as credit card or debit card details, billing address, and payment history. We use this data to confirm payments, process charges, and manage refunds when applicable. We ensure that your payment details are securely transmitted and stored with encryption technologies to protect against unauthorized access."
        },
        {
          subTitle: "Rental Information",
          text: "We retain records of your rental history, including vehicle types rented, the duration of the rental period, pick-up and drop-off locations, and any additional services or products purchased (e.g., GPS rentals, car insurance). These records help us provide better service, track rental history for your convenience, and process any claims, cancellations, or extensions that may arise during your rental period."
        },
        {
          subTitle: "Device and Technical Information",
          text: "When you access our website or mobile app, we automatically collect certain technical information to enhance user experience and improve the functionality of our services. This may include data such as your IP address, browser type, device type (e.g., smartphone, tablet, laptop), operating system, and browser settings. We also collect cookies and other tracking technologies to analyze usage patterns and ensure our website runs smoothly."
        },
        {
          subTitle: "Location Data",
          text: "In certain cases, with your consent, we collect location data from your device (e.g., GPS data) to provide you with services that require location awareness, such as navigation assistance, vehicle location tracking, and location-based recommendations. This data helps us improve our services and offer a more personalized rental experience. You can choose to disable location sharing at any time through your device settings."
        }
      ]
    },
    {
      id:3,
      title: "How We Use Your Information",
      content: [
        {
          subTitle: "Processing Bookings and Payments",
          text: "We use the personal and payment information you provide to process your rental bookings, confirm reservations, and handle secure payment transactions. This includes verifying your identity, processing payments for rental fees, security deposits, and any additional services. Your payment information is processed securely through encrypted payment gateways."
        },
        {
          subTitle: "Customer Support and Communication",
          text: "We use your contact information to communicate with you regarding your rental, including sending booking confirmations, reminders, and updates. If you have any questions or issues, we may reach out to provide customer support, resolve any problems with your rental, or assist with changes to your booking. We may also contact you regarding customer satisfaction surveys or requests for feedback."
        },
        {
          subTitle: "Personalized Services and Recommendations",
          text: "By analyzing your rental history and preferences, we aim to personalize your experience and provide recommendations for vehicles or services that best match your needs. For example, we may suggest vehicle types based on your past preferences or notify you of promotions that we believe will be of interest to you."
        },
        {
          subTitle: "Marketing and Promotional Activities",
          text: "With your explicit consent, we may use your email address or phone number to send you promotional materials, newsletters, special offers, and updates regarding new services or discounts. You can choose to opt out of these communications at any time by clicking the 'unsubscribe' link in marketing emails or by contacting us directly."
        },
        {
          subTitle: "Legal and Compliance Purposes",
          text: "We may use and disclose your information to comply with applicable laws, regulations, and legal obligations. This may include sharing your data with government agencies, regulatory bodies, or law enforcement when required by law, to fulfill tax obligations, respond to subpoenas, or protect our legal rights and interests."
        }
      ]
    },
    {
      id:4,
      title: "Sharing and Disclosure of Information",
      content: [
        {
          subTitle: "Service Providers and Business Partners",
          text: "We may share your information with trusted third-party service providers who help us perform business operations, such as payment processors, marketing agencies, and customer support services. These partners are contractually obligated to keep your data confidential and use it solely for the purposes we specify. For example, payment processors help us handle secure transactions, while marketing partners may assist us with sending promotional materials."
        },
        {
          subTitle: "Legal Compliance and Law Enforcement",
          text: "In certain cases, we may be required to disclose your personal data to comply with legal requirements or to protect our business interests. This may include responding to legal processes such as subpoenas, court orders, or regulatory investigations. We may also disclose information to law enforcement if necessary to prevent fraud or to protect the safety and rights of our customers and employees."
        },
        {
          subTitle: "Business Transfers",
          text: "If we undergo a merger, acquisition, or sale of assets, your personal data may be transferred to the new owner or entity. In such cases, we will notify you of any changes in ownership or privacy practices, and you will have the option to opt out of certain data uses if necessary."
        }
      ]
    },
    {
      id:5,
      title: "Data Security",
      content: [
        {
          subTitle: "Encryption and Secure Storage",
          text: "We use encryption technologies and secure servers to protect your personal data during transmission and storage. Sensitive information, such as payment details, is stored in encrypted formats to prevent unauthorized access. We implement security measures that comply with industry standards to ensure that your data is as secure as possible."
        },
        {
          subTitle: "Access Control and Internal Policies",
          text: "Access to your personal data is restricted to authorized personnel only, including employees, contractors, and third-party service providers who need access to perform their job functions. These individuals are bound by strict confidentiality agreements to ensure the protection of your data. We regularly review our internal policies to ensure compliance with security protocols."
        },
        {
          subTitle: "Regular Security Audits",
          text: "We conduct regular security audits and risk assessments to identify and mitigate potential vulnerabilities in our data protection systems. While we make every effort to safeguard your information, please note that no method of data transmission or storage is 100% secure. However, we are committed to maintaining the highest standards of security."
        }
      ]
    },
    {
      id:6,
      title: "Your Rights",
      content: [
        {
          subTitle: "Accessing and Updating Information",
          text: "Under Malaysia's PDPA, you have the right to access the personal data we hold about you. You may request a copy of this data, as well as correct any inaccuracies or update outdated information. If you wish to exercise this right, please contact us through the details provided in the 'Contact Us' section."
        },
        {
          subTitle: "Withdrawing Consent",
          text: "You have the right to withdraw your consent for the collection or use of your data at any time. If you no longer wish to receive marketing communications from us, you can opt-out by following the instructions provided in our emails or by contacting us directly. Please note that withdrawing consent for marketing does not affect your rental transactions or service-related communications."
        },
        {
          subTitle: "Data Retention",
          text: "We retain your personal data only for as long as necessary for the purposes outlined in this Privacy Policy or as required by law. When your data is no longer required for business purposes, we will securely delete or anonymize it. If you wish to request deletion of your data, please contact us directly."
        }
      ]
    },
    {
      id:7,
      title: "Contact Us",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please feel free to contact us. You can reach our customer support team by email at [contact@yourcompany.com] or by phone at [+60 XXXX-XXXXXX]. Our team will be happy to assist you with any inquiries or issues related to your privacy and data security."
      ]
    }
  ];
  
  export const Allblogs = [
    {
      id: 2,
      title: 'How to Choose the Right Rental Car for Your Needs: A Comprehensive Guide',
      to: 'how-to-choose-the-right-rental-car-for-your-needs',
      author: 'Admin',
      date: '15th August 2024',
      blogBanner: blog01,
      paragraph: [
        "<p class='mt-[25px] text-ptextCM font-medium leading-[32px]'>Choosing the right rental car is essential for a smooth travel experience. Whether you’re heading out for a business trip, a family vacation, or a solo adventure, the vehicle you select can significantly impact your journey. Understanding your requirements is the first step to making the right choice.</p>",
        `
          <div class="flex justify-start gap-4 items-start bg-lightBgCm p-[20px] md:p-[30px] mt-[25px] rounded-3xl">
            <p class="text-primaryCM h-[10px] text-[55px] translate-y-[-10px] md:text-[65px] basis-[5%]">❝</p>
            <p class="font-bold text-[16px] md:text-[20px]">
              Consider factors like the number of passengers, luggage capacity, and the type of roads you’ll be driving on. 
              By aligning your car choice with your travel needs, you can ensure comfort, safety, and convenience on your trip.
            </p>
          </div>
        `,
        "<p class='mt-[25px] text-ptextCM font-medium leading-[32px]'>Different car categories serve different purposes, from compact cars for city commuting to SUVs for rough terrains. It’s wise to evaluate various options based on your budget, fuel efficiency, and any specific features like GPS or child seats that you might require.</p>"
      ],
      subContent: [
        {
          content: `
                      <div class="w-full py-[30px] border-b-2 border-grayCM">
                        <h1 class="text-black font-bold text-[25px] md:text-[35px] leading-[33px]">Vehicle Types and Their Ideal Use</h1>
                        <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                          Car rental companies offer an array of vehicle types suited for different travel needs. Understanding the types available will help narrow down your choice.
                        </p>
                        <ul style="padding-left: 30px;">
                          <li class="text-[17px] font-semibold list-disc mt-[20px]">Compact cars for solo or couple city travelers.</li>
                          <li class="text-[17px] font-semibold list-disc mt-[20px]">SUVs or 4x4s for off-road adventures.</li>
                          <li class="text-[17px] font-semibold list-disc mt-[20px]">Luxury vehicles for business or special occasions.</li>
                        </ul>
                        <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                          Each category has pros and cons, depending on the travel context, so it’s essential to evaluate which vehicle will meet both your budget and travel conditions.
                        </p>
                      </div>
              `
        },
        {
          content: `
                    <div class="w-full py-[30px] border-b-2 border-grayCM">
                      <h1 class="text-black font-bold text-[25px] md:text-[35px] leading-[33px]">Evaluating Fuel Efficiency and Costs</h1>
                      <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                        Fuel efficiency is a critical factor for rental cars. Depending on the distance you plan to travel, fuel expenses can add up quickly.
                      </p>
                      <ul style="padding-left: 30px;">
                        <li class="text-[17px] font-semibold list-disc mt-[20px]">Look for hybrids or electric cars for city driving to save on fuel.</li>
                        <li class="text-[17px] font-semibold list-disc mt-[20px]">Opt for diesel or fuel-efficient SUVs if covering long distances.</li>
                      </ul>
                      <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                        Checking mileage rates and fuel economy ratings for different models can prevent unexpected costs on your trip.
                      </p>
                    </div>
                  `
        }
      ],
      tags: ['Car rental', 'Travel', 'Vehicle Selection']
    },
    {
      id: 3,
      title: 'Avoiding Common Pitfalls in Car Rentals: Tips for a Hassle-Free Experience',
      to: 'avoiding-common-pitfalls-in-car-rentals',
      author: 'Admin',
      date: '3rd September 2024',
      blogBanner: blog02,
      paragraph: [
        "<p class='mt-[25px] text-ptextCM font-medium leading-[32px]'>Renting a car can seem straightforward, but there are common issues that travelers frequently encounter. Understanding these potential pitfalls will help you have a hassle-free rental experience.</p>",
        `
          <div class="flex justify-start gap-4 items-start bg-lightBgCm p-[20px] md:p-[30px] mt-[25px] rounded-3xl">
            <p class="text-primaryCM h-[10px] text-[55px] translate-y-[-10px] md:text-[65px] basis-[5%]">❝</p>
            <p class="font-bold text-[16px] md:text-[20px]">
              Consider factors like the number of passengers, luggage capacity, and the type of roads you’ll be driving on. 
              By aligning your car choice with your travel needs, you can ensure comfort, safety, and convenience on your trip.
            </p>
          </div>
        `,
        "<p class='mt-[25px] text-ptextCM font-medium leading-[32px]'>Preparation and awareness of the rental process can help avoid surprises at the pickup counter and ensure a smooth journey.</p>"
      ],
      subContent: [
        {
          content: `
                    <div class="w-full py-[30px] border-b-2 border-grayCM">
                      <h1 class="text-black font-bold text-[25px] md:text-[35px] leading-[33px]">Hidden Fees and Additional Charges</h1>
                      <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                        Many rental companies charge fees that may not be immediately apparent. It's important to clarify any additional costs.
                      </p>
                      <ul style="padding-left: 30px;">
                        <li class="text-[17px] font-semibold list-disc mt-[20px]">Ask about insurance costs and check if you are already covered by your own insurance.</li>
                        <li class="text-[17px] font-semibold list-disc mt-[20px]">Clarify fuel policies to avoid refueling penalties.</li>
                      </ul>
                      <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                        Being aware of potential fees can save you from unnecessary expenses and make the rental process smoother.
                      </p>
                    </div>
                  `
        },
        {
          content: `
                  <div class="w-full py-[30px] border-b-2 border-grayCM">
                    <h1 class="text-black font-bold text-[25px] md:text-[35px] leading-[33px]">Inspecting the Vehicle Before Departure</h1>
                    <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                      It’s crucial to thoroughly inspect the rental car before driving off the lot. This helps avoid charges for pre-existing damage.
                    </p>
                    <ul style="padding-left: 30px;">
                      <li class="text-[17px] font-semibold list-disc mt-[20px]">Check for scratches, dents, and interior wear and tear.</li>
                      <li class="text-[17px] font-semibold list-disc mt-[20px]">Take photos of the car’s condition for records.</li>
                    </ul>
                    <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                      This simple step can prevent disputes and ensure you aren’t held liable for damages you didn’t cause.
                    </p>
                  </div>
                `
        }
      ],
      tags: ['Car rental', 'Travel Tips', 'Avoiding Mistakes']
    },
    {
      id: 4,
      title: 'Rental Car Insurance: Do You Really Need It?',
      to: 'rental-car-insurance-do-you-really-need-it',
      author: 'Admin',
      date: '12th October 2024',
      blogBanner: blog03,
      paragraph: [
        "<p class='mt-[25px] text-ptextCM font-medium leading-[32px]'>One of the biggest questions renters face is whether to purchase insurance coverage. Rental car insurance can offer peace of mind, but it’s important to know what it covers and if you really need it.</p>",
        `
          <div class="flex justify-start gap-4 items-start bg-lightBgCm p-[20px] md:p-[30px] mt-[25px] rounded-3xl">
            <p class="text-primaryCM h-[10px] text-[55px] translate-y-[-10px] md:text-[65px] basis-[5%]">❝</p>
            <p class="font-bold text-[16px] md:text-[20px]">
              Consider factors like the number of passengers, luggage capacity, and the type of roads you’ll be driving on. 
              By aligning your car choice with your travel needs, you can ensure comfort, safety, and convenience on your trip.
            </p>
          </div>
        `,
        "<p class='mt-[25px] text-ptextCM font-medium leading-[32px]'>Understanding the pros and cons of rental insurance helps make a more informed decision, ensuring you’re adequately covered without unnecessary expenses.</p>"
      ],
      subContent: [
        {
          content: `
                  <div class="w-full py-[30px] border-b-2 border-grayCM">
                    <h1 class="text-black font-bold text-[25px] md:text-[35px] leading-[33px]">Types of Rental Car Insurance Coverage</h1>
                    <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                      Rental agencies offer several types of coverage, each addressing different aspects of liability and damage.
                    </p>
                    <ul style="padding-left: 30px;">
                      <li class="text-[17px] font-semibold list-disc mt-[20px]">Collision Damage Waiver (CDW) to cover car repairs.</li>
                      <li class="text-[17px] font-semibold list-disc mt-[20px]">Personal Accident Insurance for medical costs.</li>
                    </ul>
                    <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                      Knowing what each coverage type includes can help you decide if it’s necessary based on your current insurance policy.
                    </p>
                  </div>
                `
        },
        {
          content: `
                    <div class="w-full py-[30px] border-b-2 border-grayCM">
                      <h1 class="text-black font-bold text-[25px] md:text-[35px] leading-[33px]">Evaluating Your Personal Coverage Options</h1>
                      <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                        Many credit cards and auto insurance policies provide some level of rental car coverage.
                      </p>
                      <ul style="padding-left: 30px;">
                        <li class="text-[17px] font-semibold list-disc mt-[20px]">Check with your auto insurance provider for rental car coverage options.</li>
                        <li class="text-[17px] font-semibold list-disc mt-[20px]">Inquire about coverage specifics from your credit card issuer.</li>
                      </ul>
                      <p class="mt-[25px] text-ptextCM font-medium leading-[32px]">
                        Understanding what’s already covered can save you from buying unnecessary additional insurance.
                      </p>
                    </div>
                  `
        }
      ],
      tags: ['Car rental', 'Insurance', 'Travel Planning']
    }
];
