const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const skillForm = document.getElementById("skillForm", "")
const nameInput = document.getElementById("name")
const skillInput = document.getElementById("skill")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
    });
};

const postSkill = (event) => {
    event.preventDefault()
    const body = {
        name: nameInput.value,
        skill: skillInput.value
}

axios.post("http://localhost:4000/api/skill/", body)
        .then((res) => {
            const data = res.data;
             console.log(data)
    });
};

// const deleteSkill = (event) => {
//     event.preventDefault()

// }





complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
skillForm.addEventListener('submit', postSkill)