/*------------------------------
// Check if you can play a card
------------------------------*/

//Uno cards are 0-9; red, yellow, blue, green

function canPlayCard(inputCard, inputHand){
    //console.log(inputCard);
    //console.table(inputHand);

    if(inputCard.length == 0){
        return "Please choose a card for the table";
    }
    else if(inputHand.length == 0)
    {
        return false;
    }
    else{
        const answer = inputHand.reduce((total,curr)=>{
            //If the cards in your hand match the card on the table with
            //either color or number, then return true
            for(let x of inputHand){
                if((inputCard.cardColor == x.cardColor) || (inputCard.cardNumber == x.cardNumber)){
                    return true;
                }
            }
            //If you've checked all cards and there are no trues, then
            //there are no matches, so return false
            return false;
        },inputHand);

        return answer;
    }
}