// Use this sample to create your own voice commands

intent('who are you', p =>{
    p.play('Im an AI assistant.My name is Alexbot. Im Designed to by Zoya Jamadar for VOISS 22 program under the mentorship of Mr Sarwar' )
});

intent('Alex tell me more about yourself', p =>{
    p.play('Well, Im a fun tool, with with many capablities,. You can ask me wether today, trending news, mathematical calculations or some wisdom advice')
});

intent('How are you different from other Alexa', p =>{
    p.play('Well, I am specifically designed for students, I can analyze and record data and provide feedback and prediction to teachers. In addition to this I can mimic a human conversation, this feature makes me a friendly sweet bot! ')
});


intent(
    'I want to practice speaking',
    reply(
        'Okay, Turning practice mode ON',
        'Sure, Switching to practice mode, Here\'s a situation for you :  A seminar on Management is held at the Hilton hotel. Tom and Ana are among the many attendants. They try to strike a conversation during break-time. Id like to be Tom lets start. Hi, I am Tom',
        follow(
            ' I am Ana',
            reply(
                'Hi! This is a pretty good seminar so far, huh?'
            ),
        ),
        follow(
            'Yes, I like it',
            reply('Did you attend the seminar on Leadership. How was it '),
        ),
        follow(
            'It was a great seminar.',
            reply('A good objective of leadership is to help those who are doing poorly to do well and to help those who are doing well to do even better.'),
        ),
    ),
);


intent('A device that is used to break an electric circuit is called', p => {
    p.play('switch');
});

intent('An electric cell has dash terminals', p => {
    p.play('An electric cell has two terminals.');
});

intent('What are Important topics covered in NCERT Solutions for Class 6', p => {
    p.play('Some Important topics according to Byjus for NCERT class 6 are Electric cell, A bulb connected to an electric cell, An electric circuit, Electric switch, Electric conductors and insulators ');
});

intent('What are tarsals', p => {
    p.play('In the human body, the tarsus is a cluster of seven articulating bones in each foot situated between the lower end of the tibia and the fibula of the lower leg and the metatarsus. It is made up of the midfoot (cuboid, medial, intermediate, and lateral cuneiform, and navicular) and hindfoot (talus and calcaneus).');
})