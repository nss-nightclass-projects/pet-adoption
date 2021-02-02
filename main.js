const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://media.npr.org/assets/img/2020/08/04/gettyimages-166352928-1-1_wide-7ca313d19c03d1447250fc8863b68ec60fa96661.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://images.fineartamerica.com/images-medium-large/utahceratops-gettyi-a-prehistoric-era-sergey-krasovskiy.jpg"
    },
    {
      name: "Sassy",
      color: "Poop-Colored",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Poop-Colored",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve5pzTyrcwd3K3Afcfh4toK-wQg3ZDckoSA&usqp=CAU"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Poop-Colored",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "",
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://media.npr.org/assets/img/2020/08/04/gettyimages-166352928-1-1_wide-7ca313d19c03d1447250fc8863b68ec60fa96661.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://media.npr.org/assets/img/2020/08/04/gettyimages-166352928-1-1_wide-7ca313d19c03d1447250fc8863b68ec60fa96661.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
     type: "dino",
    imageUrl: "https://media.npr.org/assets/img/2020/08/04/gettyimages-166352928-1-1_wide-7ca313d19c03d1447250fc8863b68ec60fa96661.jpg"
    }
  ];


  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  }

  const petsPrint = (taco) => {
    let domString = ' ';
    for (let i = 0; i < taco.length; i++) {
         domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                         <div class="img-container" style="background-image: url('${taco[i].imageUrl}');"></div>
                         <div class="card-body">
                           <p class="card-text">${taco[i].name}</p>
                          <p class="card-text">${taco[i].color}</p>
                          <p class="card-text">${taco[i].specialSkill}</p>
                           <p class="card-text">${taco[i].type}</p>
                           <button type="button" class="btn btn-danger" id="${i}">Delete</button>
                      </div>
                     </div>`;
      }
      printToDom('#pets', domString);
  }

  const handleButtonClick = (e) => {
    const buttonId = e.target.id;
  
    const selectedPets = [];
    for (let i = 0; i < pets.length; i++) {
      if (pets[i].type === buttonId) {
        selectedPets.push(pets[i]);
      }
    }
  
    if (buttonId === "all") {
      petsPrint(pets);
    } else {
      petsPrint(selectedPets);
    }
  };

  const deletePet = (e) => {
    const targetType = e.target.type;
    const targetId = e.target.id;
    if (targetType === 'button') {
      pets.splice(targetId, 1);
    } 
    petsPrint(pets);
  }

  
  const buttonEvents = () => {
    document.querySelector('#all').addEventListener('click', handleButtonClick);
    document.querySelector('#dino').addEventListener('click', handleButtonClick);
    document.querySelector('#cat').addEventListener('click', handleButtonClick);
     document.querySelector('#dog').addEventListener('click', handleButtonClick);

     document.querySelector('#pets').addEventListener('click', deletePet);
  }

  const init = () => {
    petsPrint(pets);
    buttonEvents();
    }
  
    init();
