import { FaChildDress ,FaHeartPulse ,FaUserDoctor  } from "react-icons/fa6";

const WorkData = [
    {
        id: 1,
        profile: require("../../Assets/Work/childcare.jpg"),
        name: "Childcare",
        icon: <FaChildDress/>,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloremque."
    },
    {
        id: 2,
        profile: require("../../Assets/Work/cardiology.jpg"),
        name: "Cardiology",
        icon: <FaHeartPulse/>,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloremque."
    },
    {
        id: 3,
        profile: require("../../Assets/Work/cardiologist.jpg"),
        name: "Cardiologist",
        icon: <FaHeartPulse/>,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloremque."
    },
    {
        id: 4,
        profile: require("../../Assets/Work/sergery.jpg"),
        name: "Surgery",
        icon: <FaUserDoctor />,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloremque."
    },
]
export default WorkData;