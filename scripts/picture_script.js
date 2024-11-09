function changeImage(imageId, boulderId) {
    let images = document.querySelectorAll(`${boulderId} img`);
    images.forEach(img => {
        img.style.display = 'none';
    });

    let selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}

function changeName(headerId, boulderName, routeName, boulderGrade) {
    let header = document.getElementById(headerId);
    header.innerHTML = `${boulderName} | ${routeName} | ${boulderGrade}`;
}

function changeLocation(locationId) {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });


    let selectedLocation = document.getElementById(locationId);
    if (selectedLocation) {
        selectedLocation.style.display = 'block';
    }
}



/* Nav Buttons */

document.getElementById('leftForkButton').addEventListener('click', function() {
    changeLocation('leftForkSection');
});

document.getElementById('rightForkButton').addEventListener('click', function() {
    changeLocation('rightForkSection');
});

document.getElementById('newJoesButton').addEventListener('click', function() {
    changeLocation('newJoesSection');
});

document.getElementById('allAreasButton').addEventListener('click', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'block';
    });

    let selectedLocation = document.getElementById('marksClimbs');
    if (selectedLocation) {
        selectedLocation.style.display = 'none';
    }    
});

document.getElementById('climbingVideosButton').addEventListener('click', function() {
    changeLocation('marksClimbs')
});



/* left fork buttons */

/* Eden */
document.getElementById('edenButton').addEventListener('click', function() {
    changeImage('edenImage', '#edenBoulder');
    changeName('edenHeader', 'Eden', 'Eden', 'V10');
});

document.getElementById('saveYourselfButton').addEventListener('click', function() {
    changeImage('saveYourselfImage', '#edenBoulder');
    changeName('edenHeader', 'Eden', 'Save Yourself', 'V7');
});

document.getElementById('anatomyActButton').addEventListener('click', function() {
    changeImage('anatomyActImage', '#edenBoulder');
    changeName('edenHeader', 'Eden', 'Anatomy Act', 'V7');
});

/* Superman */
document.getElementById('supermanButton').addEventListener('click', function() {
    changeImage('supermanImage', '#supermanBoulder');
    changeName('supermanHeader', 'Superman', 'Superman', 'V10');
});

document.getElementById('lexLutherButton').addEventListener('click', function() {
    changeImage('lexLutherImage', '#supermanBoulder');
    changeName('supermanHeader', 'Superman', 'lexLuther', 'V12');
});

document.getElementById('loisLaneButton').addEventListener('click', function() {
    changeImage('loisLaneImage', '#supermanBoulder');
    changeName('supermanHeader', 'Superman', 'Lois Lane', 'V10');
});

/* Blackout */
document.getElementById('gentlemansProjectButton').addEventListener('click', function() {
    changeImage('gentlemansProjectImage', '#blackoutBoulder');
    changeName('blackoutHeader', 'Blackout', 'Gentleman\'s Project', 'V11');
});

document.getElementById('gentlemansProjectSitButton').addEventListener('click', function() {
    changeImage('gentlemansProjectSitImage', '#blackoutBoulder');
    changeName('blackoutHeader', 'Blackout', 'Gentleman\'s Project Sit', 'V12');
});

document.getElementById('blackoutButton').addEventListener('click', function() {
    changeImage('blackoutImage', '#blackoutBoulder');
    changeName('blackoutHeader', 'Blackout', 'Blackout', 'V13');
});

document.getElementById('jarashButton').addEventListener('click', function() {
    changeImage('jarashImage', '#blackoutBoulder');
    changeName('blackoutHeader', 'Blackout', 'Jarash', 'V6');
});



/* right fork buttons */

/* Slot Machine */
document.getElementById('looseSlotsButton').addEventListener('click', function() {
    changeImage('looseSlotsImage', '#slotMachineBoulder');
    changeName('slotMachineHeader', 'Slot Machine', 'Loose Slots', 'V8');
});

document.getElementById('slotMachineButton').addEventListener('click', function() {
    changeImage('slotMachineImage', '#slotMachineBoulder');
    changeName('slotMachineHeader', 'Slot Machine', 'Slot Machine', 'V8');
});

document.getElementById('oneArmedBanditButton').addEventListener('click', function() {
    changeImage('oneArmedBanditImage', '#slotMachineBoulder');
    changeName('slotMachineHeader', 'Slot Machine', 'One Armed Bandit', 'V4');
});

document.getElementById('xMarksTheSpotButton').addEventListener('click', function() {
    changeImage('xMarksTheSpotImage', '#slotMachineBoulder');
    changeName('slotMachineHeader', 'Slot Machine', 'X Marks The Spot', 'V6');
});

/* Skyy */
document.getElementById('admiralNelsonButton').addEventListener('click', function() {
    changeImage('admiralNelsonImage', '#skyyBoulder');
    changeName('skyyHeader', 'Skyy', 'Admiral Nelson', 'V2');
});

document.getElementById('lordCalvertButton').addEventListener('click', function() {
    changeImage('lordCalvertImage', '#skyyBoulder');
    changeName('skyyHeader', 'Skyy', 'Lord Calvert', 'V2');
});

document.getElementById('canadiansFinestButton').addEventListener('click', function() {
    changeImage('canadiansFinestImage', '#skyyBoulder');
    changeName('skyyHeader', 'Skyy', 'Canadians Finest', 'V1');
});

document.getElementById('skyyButton').addEventListener('click', function() {
    changeImage('skyyImage', '#skyyBoulder');
    changeName('skyyHeader', 'Skyy', 'Skyy', 'V0');
});

/* Flu */
document.getElementById('epidemicButton').addEventListener('click', function() {
    changeImage('epidemicImage', '#fluBoulder');
    changeName('fluHeader', 'Flu', 'Epidemic', 'V5');
});

document.getElementById('pandemicButton').addEventListener('click', function() {
    changeImage('pandemicImage', '#fluBoulder');
    changeName('fluHeader', 'Flu', 'Pandemic', 'V7');
});

document.getElementById('hivButton').addEventListener('click', function() {
    changeImage('hivImage', '#fluBoulder');
    changeName('fluHeader', 'Flu', 'Hiv', 'V9');
});

document.getElementById('fluButton').addEventListener('click', function() {
    changeImage('fluImage', '#fluBoulder');
    changeName('fluHeader', 'Flu', 'Flu', 'V8');
});



/* New Joes Buttons */

/* Roll The Bones */
document.getElementById('bowtieButton').addEventListener('click', function() {
    changeImage('bowtieImage', '#rollTheBonesBoulder');
    changeName('rollTheBonesHeader', 'Roll The Bones', 'Bowtie', 'V2');
});

document.getElementById('rollTheBonesButton').addEventListener('click', function() {
    changeImage('rollTheBonesImage', '#rollTheBonesBoulder');
    changeName('rollTheBonesHeader', 'Roll The Bones', 'Roll The Bones', 'V6');
});

document.getElementById('lifeEnderButton').addEventListener('click', function() {
    changeImage('lifeEnderImage', '#rollTheBonesBoulder');
    changeName('rollTheBonesHeader', 'Roll The Bones', 'Life Ender', 'V5');
});

/* Lady Hips */
document.getElementById('ladyHipsButton').addEventListener('click', function() {
    changeImage('ladyHipsImage', '#ladyHipsBoulder');
    changeName('ladyHipsHeader', 'Lady Hips', 'Lady Hips', 'V7');
});

document.getElementById('projectButton').addEventListener('click', function() {
    changeImage('projectImage', '#ladyHipsBoulder');
    changeName('ladyHipsHeader', 'Lady Hips', 'Project', 'V9');
});

/* Chips */
document.getElementById('silverbackButton').addEventListener('click', function() {
    changeImage('silverbackImage', '#chipsBoulder');
    changeName('chipsHeader', 'Chips', 'Silverback', 'V8');
});

document.getElementById('silverbackAreteButton').addEventListener('click', function() {
    changeImage('silverbackAreteImage', '#chipsBoulder');
    changeName('chipsHeader', 'Chips', 'Silverback Arete', 'V5');
});

document.getElementById('americanWimpButton').addEventListener('click', function() {
    changeImage('americanWimpImage', '#chipsBoulder');
    changeName('chipsHeader', 'Chips', 'American Wimp', 'V6');
});

document.getElementById('chipsButton').addEventListener('click', function() {
    changeImage('chipsImage', '#chipsBoulder');
    changeName('chipsHeader', 'Chips', 'Chips', 'V7');
});

document.getElementById('planetOfTheApesButton').addEventListener('click', function() {
    changeImage('planetOfTheApesImage', '#chipsBoulder');
    changeName('chipsHeader', 'Chips', 'Planet of the Apes', 'V6');
});

document.getElementById('bubbatronicButton').addEventListener('click', function() {
    changeImage('bubbatronicImage', '#chipsBoulder');
    changeName('chipsHeader', 'Chips', 'Bubbatronic', 'V9');
});

/* theme button */
document.getElementById('themeButton').addEventListener('click', () => {
    let theme = document.getElementById('darkTheme')
    if (theme) {
        theme.remove();
    } else {
        let stylesheet = document.createElement('link');

        stylesheet.rel = 'stylesheet';
        stylesheet.href = 'css/darkTheme.css';
        stylesheet.id = 'darkTheme';

        document.head.appendChild(stylesheet);}

})