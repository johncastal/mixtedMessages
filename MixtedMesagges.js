const random = (limit) => Math.floor(Math.random() * (limit));

const quote = () => {

    const Message = {
        'date' : ['Today','This week', 'In your weekend','Everyday','In the morning','In the evening','In noon','Every Monday'],
        'messages' : ['Aim high','Have faith','Be awesome','Accept yourself','Alive & well','Act justly','Amplify hope'],
        'complement' : ['Read','Hike', 'Cook Something New', 'Try A New Workout On YouTube','Take A Hot Bath','Discover New Music',"Find What You're Grateful For"]
    }
    
    output = [];
    for(let m in Message){
        if(m==='date'){
            output.push(Message[m][random(Message[m].length)]);
            output.push(["in your life,"]);
        }else if(m==='messages'){
            output.push(["think how --"]);
            output.push(Message[m][random(Message[m].length)]);
            output.push(["--"]);
        }else if(m==='complement'){
            output.push(["and don't forget doing:"]);
            output.push(Message[m][random(Message[m].length)]);
        }              
    }
    return output.join(' ')
}

console.log(quote())