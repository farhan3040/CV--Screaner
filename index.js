console.log('this is cv screaner project');
const data = [
    {
        name: 'sumit kumar',
        age : 20,
        city:'lakhimpur',
        language : 'php',
        framwork : 'Laravel',
        image : 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    
    
    {
        name: 'Rahul Kumar',
        age : 20,
        city:'Bihar',
        language : 'Fluter',
        framwork : 'Angular Js',
        image : 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    
    
    {
        name: 'Raju Karn',
        age : 25,
        city:'MadhuBani',
        language : 'JavaScript',
        framwork : 'React Native',
        image : 'https://randomuser.me/api/portraits/men/66.jpg'
    },

    {
        name: 'Deepak ',
        age : 21,
        city:'MuzafferPur',
        language : 'Python',
        framwork : 'Django',
        image : 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    
    {
        name: 'Md Farhan',
        age : 25,
        city:'GAYA',
        language : 'JAVASCRIPT',
        framwork : 'NodeJS',
        image : 'https://randomuser.me/api/portraits/men/5.jpg'
    },
]




function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next : function () {
           return nextIndex < profiles.length ? {value : profiles[nextIndex++] , done:false} : {done:true}
        }
    }
}

// const Iteratordata = cvIterator(data);
// console.log(Iteratordata.next());
// console.log(Iteratordata.next());
//* console.log(Iteratordata.next());
// console.log(Iteratordata.next());
// console.log(Iteratordata.next());  

let submit =document.getElementById('submit');

submit.addEventListener('click' , nextCV);

const candidates =  cvIterator(data);
nextCV();

function nextCV(){

    const currentCandidate = candidates.next().value;
    let image =document.getElementById('image');
    let profile =document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                            <li class="list-group-item">Works with ${currentCandidate.language} language</li>
                            <li class="list-group-item">Using ${currentCandidate.framwork} framwork</li>
                        </ul>`;
    }else{
        alert('End of Candidates application');
        window.location.reload(); 
    }
}