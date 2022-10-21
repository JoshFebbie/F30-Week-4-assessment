

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune:  (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made!", "Accept something that you cannot change, and you will feel better!", "All will go well with your new project!", "You will have an amazing encounter with Big-foot!", "You will have wealth and knowlede beyond your wildest dreams!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)

    },
    postSkill: (req, res) => {
        let name = req.body.name
        let skill = req.body.skill

        db.push ({
            name: name, skill: skill})
            res.status(200).send(db)
    },
    // deleteSkill: (req, res) => {
    //     let index = db.findIndex(element => element.body === +req.params.body)
    //     db.splice(index,1)
    //     res.status(200).send(db)
    // }
}

const db = [
    {
        name: "Josh",
        skill: "Fishing"
    },
    {
        name: "Ben",
        skill: "Snowboarding"
    },
    {
        name: "Bender",
        skill: "Burglery"
    }
]