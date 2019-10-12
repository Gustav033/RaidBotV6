module.exports = async client => {
    client.on("ready", () => {
        console.log("                 Raid-Bot V2 Online");
        console.log(`        Feito Por: Gustavo33`);
       client.user.setGame(`Feito Por Gustavo33`)
    })
}