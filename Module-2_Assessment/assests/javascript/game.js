//letters
var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Nintendo Switch Titles and Images
var titles = ['zleda', 'odyssey', 'animalcrossing', 'mariokart', 'luigismansion', 'pokemon', 'splatoon', 'smashbros', 'xenoblade', 'yoshiscraftedworld', 'hollowknight', 'kirby', 'donkeykong', 'fireemblem'];
//chosen title
var chosentitle = "";
var chosenletters = [];
var underscores = 0;
//Correct
var underright =[];
//Wrong
var wrongletters = [];
//Counter
var correctguesscount = 0;
var wincount = 0;
var losecount = 0;
var guessesleft = 10;
function reset()
{
	//Chooses random title
	chosentitle = titles[Math.floor(Math.random() * titles.length)];
	chosenletters = chosentitle.split('');
    underscores = chosenletters.length;
    
    //Reset
    guessedletters = 0;
    correctguesscount = 0;
    guessesleft = 10;
    wrongletters = [];
    underright = [];
    letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    test = false; 
    start();
    //Debug
    console.log(chosentitle);
    console.log(chosenletters);
    console.log(underscores);
}
function start()
{
    //Random title
    chosentitle = titles[Math.floor(Math.random() * titles.length)];
	chosenletters = chosentitle.split('');
    underscores = chosenletters.length; 
    //Reset
    correctguesscount = 0;
    guessesleft = 10;
    wrongletters = [];
    underright = [];
    letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Fill underscore
    for(var i = 0; i < underscores; i++)
    {
    underright.push('_');
    document.getElementById('underscore').innerHTML = underright.join(' ');
    }
    //Debug
    console.log(chosentitle);
    console.log(chosenletters);
    console.log(underscores);
    console.log(underright);
}
//HTML
document.getElementById('underscore').innerHTML = underright.join(' ');
document.getElementById('lives').innerHTML = guessesleft;
document.getElementById('wins').innerHTML = wincount;
document.getElementById('fails').innerHTML = losecount;
document.getElementById('wrongletters').innerHTML = wrongletters;

function compareletters(userKey)
{   console.log('Am I working?')
    if(chosenletters.indexOf(userKey) > -1)
    {
        for(var i = 0; i < underscores; i++)
        {
            if(chosenletters[i] === userKey)
            {
            correctguesscount++;
            underright[i] = userKey;
            document.getElementById('underscore').innerHTML = underright.join(' ');
            }
        }
        //Debug
        console.log(underright);
    }
    //Wrong key
    else
    {
        wrongletters.push(userKey);
        guessesleft--;
        document.getElementById('lives').innerHTML = guessesleft;
        document.getElementById('wrongletters').innerHTML = wrongletters;
        //Debug
        console.log('wrong letters = ' + wrongletters);
        console.log('guessed left =' + guessesleft);
    }
}
function winlose()
{
    if(correctguesscount === underscores)
    {
    
    document.getElementById('wins').innerHTML = wincount
    alert('Congradulations! You succeed!');
    //display image when we get  there....
    reset();
    }
    
    else if(guessesleft === 0)
    {
        losecount++;
        document.getElementById('fails').innerHTML = losecount;
        alert('You died');
        reset();

    }
}
start();

document.onkeyup = function(event)
{
	test = true;
	var guessedletters= event.key;
	for(var i = 0; i < letter.length; i++)
	{	
		if(guessedletters === letter[i] && test === true)
		{
			var spliceletter = letter.splice(i,1);
			//Debug
			console.log('Letter is = ' + letter[i])
			console.log('Spliced letter is = ' + spliceletter);

			compareletters(guessedletters);
			winlose();
		}
	}		
		
}
