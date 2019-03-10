function sfmt (...args) {
    if(!args[0])throw new Error("No string included, cannot replace.");
    if(args.length < 2)throw new Error(`Only ${args.length} arguments have been provided. The function requires at least two.`);

    let string = args[0];
    let replacers = args.slice(1);

    for(let i = 0; i < replacers.length; i++)
        string = string.replace("<>", replacers[i]);

    return console.log(string)
}

module.exports = sfmt;