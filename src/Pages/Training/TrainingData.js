import Tr1 from "../../Assets/Training/Attention-Overview-5b763aaf.jpg"
import Tr2 from "../../Assets/Training/Working-Memory-Overview-2-7bead1c6.jpg"
import Tr3 from "../../Assets/Training/Memory-Overview-647d9b5a.jpg"
import Tr4 from "../../Assets/Training/Daily-Living-Overview-836f0b69.jpg"
import Tr5 from "../../Assets/Training/Language-Ovierview-0afae473.jpg"

const TrainingData = [
    {
        name: "Attention",
        description: "A good working Attention level is the foundation for all continuing cognitive therapy. A patient may not be able to stay focused on a single task, avoiding distractions, can't move from one task to another very easily, can't do more than one thing at once, and can't process things very quickly.",
        image: Tr1,
        table: require("../../Assets/Training/attention.webp")
    },
    {
        name: "Work Memory",
        description: "Working Memory refers to a brain system that provides temporary storage and manipulation of the information. The functionality of the working memory, provides the basis for many higher cognitive functions such as problem solving, speech comprehension, arithmetic, and decision making.",
        image: Tr2,
        table: require("../../Assets/Training/Working.webp")
    },
    {
        name: "Memory",
        description: "Deficits in Memory functioning are very common in individuals following acquired neurocognitive impairment, neurodegenerative disease or associated with psychiatric trauma. Memory exercises with HeadApp reinforce internal learning strategies and help to establish compensation techniques.",
        image: Tr3,
        table: require("../../Assets/Training/memory.webp")
    },
    {
        name: "Daily living / Executive Function",
        description: "Executive Functions include all the things that allow us to organize, make decisions and solve problems. It also involves the way we monitor what’s going on around us and adjust what we think and do in response to it.",
        image: Tr4,
        table: require("../../Assets/Training/dailyliving.webp")
    },
    {
        name: "Language / Aphasia",
        description: "Aphasia is an inability to comprehend or formulate language because of damage to specific brain regions. The major causes are stroke or head trauma. The trainings support Speech Language Pathologists.",
        image: Tr5,
        table: require("../../Assets/Training/language.webp")
    }
]

export default TrainingData;