import { CornerDownRight, Dot } from "lucide-react";
import Link from "next/link";

export default function servicesPage() {
  const data = [
    {
      id: 1,
      title: "Full-Stack Web Application Development",
      texts: [
        "Responsive UI design",
        "RESTful API development",
        "Authentication and authorization",
        "Real-time data handling",
        "Deployment and server management",
      ],
    },
    {
      id: 2,
      title: "E-commerce Platform Development",
      texts: [
        "Product listing and categorization",
        "Secure payment integration",
        "User account management",
        "Order tracking and management",
        "Admin dashboard for management",
      ],
    },
    {
      id: 3,
      title: "API Development and Integration",
      texts: [
        "API design and documentation",
        "Secure data exchange",
        "Third-party API integration",
        "Rate limiting and caching for performance",
        "Error handling and logging",
      ],
    },
    {
      id: 4,
      title: "Single Page Application (SPA) Development",
      texts: [
        "Fast loading and responsive UI",
        "Client-side routing with React Router",
        "State management",
        "Progressive Web App (PWA) capabilities",
        "Caching and data persistence",
      ],
    },
    {
      id: 5,
      title: "Maintenance and Support",
      texts: [
        "Bug fixing and troubleshooting",
        "Performance optimization",
        "Security updates",
        "Feature enhancements based on feedback",
        "Customer support and assistance",
      ],
    },
    {
      id: 6,
      title: "Third-Party Integrations",
      texts: [
        "Seamless integration with external APIs",
        "Secure data handling and compliance",
        "Monitoring and troubleshooting",
        "Performance and security audits",
        "Customer feedback ",
      ],
    },
  ];
  return (
    <div className="bg-white rounded-lg w-full h-full p-10">
      <p className="text-[#576076] text-2xl font-bold py-5">
        Transforming Ideas into Innovative Reality,Leverage the power of the
        MERN stack to build comprehensive, high-performance web applications
        that cater to your business needs. As a full-stack developer, I
        specialize in creating responsive front-end interfaces, robust back-end
        systems, and seamless database integrations to deliver scalable and
        secure web solutions.
      </p>
      <h1 className="text-4xl text-center font-bold py-7">
        Services I <span className="text-[#28A745]">Offered</span>
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-1">
        {/* //CARD 1 */}
        {data.map(({ id, title, texts }) => (
          <div
            key={id}
            className="bg-[#F0F2F5] shadow-2xl rounded-xl p-5  text-[#646569]"
          >
            <div className="bg-white w-full flex justify-start items-center rounded-lg transition-all ease-in-out duration-500 scale-100 hover:scale-110 hover:-translate-y-2">
              <div className="p-5 font-bold">
                <ul>
                  {texts?.map((text, index) => (
                    <li key={index} className="flex justify-start items-center">
                      <Dot size={48} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h1 className="text-center mt-2 font-bold text-[#28A745] ">
              {title}
            </h1>
          </div>
        ))}
      </div>
      <h1 className="text-4xl text-center font-bold py-7">
        <span className="text-[#28A745]">Technologies</span> Used:
      </h1>
      <div className=" bg-[#F0F2F5] shadow-2xl p-5 rounded-xl">
        <div className=" bg-white p-5 rounded-xl">
          <ul className="text-xl space-y-1">
            <li>
              <span className="font-bold">Front-End:</span>Next.js,
              React.js,vite.js tailwind,Framer Motion, CSS/SCSS, Bootstrap,
              Material-UI
            </li>
            <li>
              <span className="font-bold">Back-End:</span> Node.js, Express.js,
              Next.js JWT for authentication, Zod for validation
            </li>
            <li>
              <span className="font-bold">Database:</span> MongoDB, Mongoose for
              schema modeling
            </li>
            <li>
              <span className="font-bold">Deployment:</span> Vercel, Heroku,
              AWS, CI/CD pipelines for automated deployment
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-4xl text-center font-bold py-7">
        Key <span className="text-[#28A745]">Benefits</span> :
      </h1>
      <div className=" bg-[#F0F2F5] shadow-2xl p-5 rounded-xl">
        <div className=" bg-white p-5 rounded-xl">
          <ul className="text-xl space-y-1">
            <li>
              <span className="font-bold">Scalability:</span>Applications
              designed to handle growth, from a small user base to a large-scale
              audience.
            </li>
            <li>
              <span className="font-bold">Security:</span> Implement best
              practices for securing your application, including encryption,
              authentication, and authorization.
            </li>
            <li>
              <span className="font-bold">Performance:</span> Optimize your
              application for speed and efficiency, ensuring fast load times and
              responsive interactions.
            </li>
            <li>
              <span className="font-bold">Customizability:</span> Tailored
              solutions that meet your specific business requirements, from
              unique features to branding consistency.
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-4xl text-center font-bold py-7">
        <span className="text-[#28A745]">Why</span> Choose Me?
      </h1>
      <div className=" bg-[#F0F2F5] shadow-2xl p-5 rounded-xl">
        <div className=" bg-white p-5 rounded-xl">
          <ul className="text-xl space-y-1">
            <li>
              <span className="font-bold">Proven Expertise:</span>With extensive
              experience in MERN stack development, I bring a deep understanding
              of both front-end and back-end technologies.
            </li>
            <li>
              <span className="font-bold">End-to-End Solutions:</span> From
              initial concept to final deployment, I handle every aspect of your
              project, ensuring a seamless and hassle-free experience.
            </li>
            <li>
              <span className="font-bold">Continuous Support:</span> Beyond just
              delivering a product, I offer ongoing support to keep your
              application running smoothly and efficiently.
            </li>
          </ul>
        </div>
      </div>
      <Link href="/contact">
        <div className="bg-[#F0F2F5] font-bold rounded-2xl shadow-2xl p-5 my-5 hover:scale-95 transition-all ease-in-out duration-500">
          <p className="w-full flex justify-center bg-[#28A745] text-6xl p-10 text-white rounded-2xl ">
            Let&apos;s Talk
            <span className="-rotate-45 text-4xl">
              <CornerDownRight />
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
