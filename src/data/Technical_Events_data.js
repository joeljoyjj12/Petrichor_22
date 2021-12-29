const Technical_Events_data=[
    {
        name : "Robo Soccer",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Robo_Soccer.jpg",
        organiser:[
            {
                name : "Ayush Singh",
                pic :"/media/organisers/Ayush_Singh.jpg",
                email :"8874236084",
            },
            {
                name : "Jayasurya R",
                pic :"/media/organisers/Jayasurya_R.jpg",
                email :"94466 90988",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["11 StudioSeven is Maltas leading A/V and production hub. In 2019, StudioSeven celebrated their 40 year anniversary and contacted Bison Studio in order to help them create an online presence that was in line with their new vision. A website that truly represents what they’re all about", 
        "From the start of this project, we knew that StudioSeven wanted to stand out. They were not looking for a template approach that would look the same as their competitors. We instantly knew that this was the perfect project for us."
        ],
        hover_description : "Robotics",
       
        // have each rule as a element of an array
        rule_book_rules :["Every team has to register online on the official Petrichor website to participate in the competition.",
        "A team ID will be allocated to the team on registration which shall be used for future references.",
        "The duration of each match will be 3 minutes.",
        "Teams can make and use their own custom models or use the default models available.",
        "The field will be reset in case the ball is stuck between bots for more than a considerable amount of time.",
        "A penalty (for e.g., asking the opponent to start first, reducing the goals scored, etc.) will be imposed if the custom model is more than a definite size (width of the bot must be less than or equal to 40% of goal post width), If the Bot blocks the whole Goalpost, then it will lead to disqualification of the team. (Go through this link to find out how to measure distances on a field)",
        "In the case of a Draw in knockout stages extra time will be provided, even after extra time if the result is a draw, then we will have 5 penalty shootouts if the result is still a draw, then the team with the highest points will qualify for the next match.",
        "The decision of the organizers or judges shall be treated as final and binding on all.",
        "No responsibility will be held by Petrichor, IIT Palakkad for any late, lost, or misdirected entries.",
        "The build presented by the teams should be original (not protected by copyright/patent/technical publication by anyone).",
        "All modes of official communication will be through the Petrichor e-mail. Participants are advised to keep track of all folders in their institute e-mail accounts."],
        

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["Group Stage",
            "The participants will be randomly split into two groups and the participants in each group will be playing in a round-robin fashion against each other. Two participants from each group who score maximum points will be qualified for the semi-final.",
            "Each win will get you two points, a draw will get one point for each team, and zero points if you lose in group stages"],
            ["Knockout Stage",
            "The qualified participants will play a semi-final match against a selected opponent (based on points) and the winner of that match will qualify for the finals. The two winners of the semis will compete against each other in the final and the one who wins the final will be crowned as the Robo soccer champion.",
            "If a draw happens in the Knockout stages, extra time will be provided, even after extra time if the result is a draw, then we will have 5 penalty shootouts if the result is still a draw then the team with the highest points will qualify for the next match.",
            "The number of groups may increase based on the number of participants enrolled."],
        ],
        
        
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["quality of sound produced", " your own twist to the original song"],



        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },

   
    {
        name : "Maze Runner",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Maze_Runner.jpg",
        organiser:[
            {
                name : "Ayush Singh",
                pic :"/media/organisers/Ayush_Singh.jpg",
                email :"8874236084",
            },
            {
                name : "Jayasurya R",
                pic :"/media/organisers/Jayasurya_R.jpg",
                email :"94466 90988",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["Participants need to write a program in Python/C++ for a mobile robot to clear an unknown maze in least possible time. The robot model and control details will be given prior along with sample mazes for practice. The whole task will require concepts like obstacle avoidance and path planning. ", 
        "The platform for simulation is Gazebo 9 (with ROS Melodic on ubuntu 18.04), any other software cannot be used. The competition is designed to be beginner-friendly in field of ROS or robotics simulation, required materials will be provided for learning. The major portion consists of programming in python/C++, hence participants with zero knowledge in ROS are also welcome."
        ],
        hover_description : "Robotics",
       
        // have each rule as a element of an array
        rule_book_rules :["In case of any discrepancy, the final take will be of the judges.",
        "Participant will receive the final maze only after the complete code is submitted, and the code cannot be altered in any way after that.",
        "Participants are free to run the bot in the final maze any number of times they want before recording the final submission (hence the algorithm should be planned in such a way to store maximum details of the maze in the trial runs)",
        "The path of the bot should be deduced by the algorithm itself, and cannot be hard-coded in any way. Doing so will lead to immediate disqualification. Hence use of CSV or similar files are allowed for storing the maze related information but this whole process of reading and writing the CSV/similar files should be automated by the algorithm. And the submission should contain all the generated files as well.",
        "Code should be properly commented and linted.",
        "Submission of only registered participants will be evaluated.",
        "If any malpractice is suspected, judges hold the right of disqualification.",
        "Submission has to be done through the mail id provided in the ‘Making Submission’ in order to get it evaluated.",],
        

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["General",
            "The participants will be randomly split into two groups and the participants in each group will be playing in a round-robin fashion against each other. Two participants from each group who score maximum points will be qualified for the semi-final.",
            "Each win will get you two points, a draw will get one point for each team, and zero points if you lose in group stages"],
           
        ],
        
        pdf_present:true,
        pdf_link:"/media/pdf_events/Maze_Runner.pdf",
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["quality of sound produced", " your own twist to the original song"],



        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },


    {
        name : "Competitive Programming",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Competitive_Programming.jpg",
        organiser:[
            {
                name : "Shubhang Kedia",
                pic :"/media/organisers/Shubhang_Kedia.jpg",
                email :"9569591920",
            },
            {
                name : "Mayank Rawat",
                pic :"/media/organisers/Mayank_Rawat.jpg",
                email :"7607587444",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["Get ready to participate in iit pkd's petrichor cp contest. Where your cp and problem-solving skills will be put to test through several mind boggling innovative coding questions.", 
        "Get a chance to compete among the best coders and show off your coding skills and win prizes worth 5k, all through the comfort of your home."
        ],
        hover_description : "Computer Science",
       
        // have each rule as a element of an array
        rule_book_rules :["It’s an individual contest not a team contest",
        "You are not allowed to communicate with other participants, use another person's code for solutions/generators, share ideas of solutions",
        "You are not allowed to use multiple accounts and will take part in the contest using your personal and the single account",
        "You are not allowed to use third party codes from other websites for e.g. geekforgeeks",
        "An ID will be allocated to the participant on registration which shall be used for future references",
        "All modes of official communication will be through the petrichor's e-mail. Participants are advised to keep track of all folders in their e-mail accounts.",
        "In case plagarism is found on candidate's code then that candidate will be disqualified from the contest and will be barred from receiving any prizes.",
        "Participants have to fill the online form for participating in the contest.",],
        

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["General",
            "One cp contest of 3 hours where winners will be selected through common leaderboard"],
        ],
        
        pdf_present:false,
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["quality of sound produced", " your own twist to the original song"],



        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },


    {
        name : "Machine Learning Predicting Task",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Machine_Learning_Predicting_Task.jpg",
        organiser:[
            {
                name : "Kundan Pal",
                pic :"/media/organisers/Kundan_Pal.jpg",
                email :"92522 01007",
            },
            {
                name : "Syed Abdul Manteen",
                pic :"/media/organisers/Syed_Abdul_Manteen.jpg",
                email :"99492 97395",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["In this competition participants are required to make a predicting model using python. We will be testing that model on sufficiently large data. We will provide a problem statement and chunk of data and by using that participant will have to train his model.", 
        "We will judge models based on the accuracy of model and compilation time."
        ],
        hover_description : "Computer Science",
       
        // have each rule as a element of an array
        rule_book_rules :["You are not allowed to use standard machine learning libraries.",
        "Any kind of plagiarism will not be tolerated which means you are not allowed to take help from other participants and the code should be strictly written by you only. If you are found participating in any such activities you will be disqualified.",
        "You will be eligible to get prizes only if your model has satisfactory accuracy. If any conflict occurs organizers will handle it accordingly",
        "Rules regarding problems will be mentioned in the question itself."],
        

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["General",
            "Refer the problem statement pdf "],
        ],
        
        pdf_present:true,
        pdf_link:"/media/pdf_events/Machine_Learning_Predicting_Task.pdf",
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["quality of sound produced", " your own twist to the original song"],

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },




    {
        name : "D-Sign",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/D_Sign.jpg",
        organiser:[
            {
                name : "Tharun Teja Reddy",
                pic :"/media/organisers/Tharun_Teja_Reddy.jpg",
                email :"96526 76317",
            },
            {
                name : "Makireddy Antharya",
                pic :"/media/organisers/Makireddy_Antharya.jpg",
                email :"83410 20929",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["IIT Palakkad presents the most awaited event under Petrichor-2k22, D-SIGN. Petrichor allows you to compete against more than 290 colleges all over India, so show off your design talents. ", 
        "D-SIGN, the competition where competitors will be given a set of guidelines based on a theme, and are supposed to solve the task using their own innovative ideas and ingenuity."
        ],
        hover_description : "Mechanical Engineering",
       
        // have each rule as a element of an array
        rule_book_rules :["This is a single participant competition. Each participant must register online using the URL provided below.",
        "Petrichor, IIT Palakkad will not be found responsible for any late or misdirected entries.",
        "Participants are not allowed to take any reference images from the internet. Any type of misconduct will result in disqualification.",
        "You can proceed with your work once the problem statement has been released. If you have any questions, you can contact us directly via WhatsApp at the numbers listed below, or via mail ID provided below.",
        "The file should be submitted in step file format.",
        "To submit, send your file(only file and rendered pictures) via mail provided below. Xyz@gmail.com",
        "Mail ID for submissions and queries: xyz"],

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["Problem statement","Design a Study Chair. The more creative one will be the winner. You can add as many features you want; those will also add points to your score."],
            ["General","It is an individual event. Participants will have 48 hours from the time the problem statement is revealed to solve it","The design file must follow the format described in the problem statement.", "Any CAD software will do."],
        ],
        
        // not sure
        pdf_present:true,
        pdf_link:"/media/pdf_events/D_sign.pdf",
        
        // reccommended make is true and write down the rest
        judging_criteria_show : true,
        judging_criteria : ["Creativity","Number of objects made","Closeness to reality","Appearance"],

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },



    {
        name : "Miniature",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Miniature.jpg",
        organiser:[
            {
                name : "Dusa Shashi Kumar",
                pic :"/media/organisers/Dusa_Shashi_Kumar.jpg",
                email :"90594 25275",
            },
            {
                name : "Sai Ramya",
                pic :"/media/organisers/Sai_Ramya.jpg",
                email :"86880 39071",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["We will have a building elevation competition conducted over the revit platform. We will give a building plan and contestants have to prepare the elevation of the same plan. "],
        hover_description : "Civil Engineering",
       
        // have each rule as a element of an array
        rule_book_rules :["This is an individual competition. Each participant must register online using the URL provided below.",
        "Petrichor, IIT Palakkad will not be found responsible for any late or misdirected entries.",
        "Participants are not allowed to take any reference files from the internet. Any type of misconduct will result in disqualification.",
        "Participants have to submit both a pdf file and Revit file.",
        "You can proceed with your work once the problem statement has been released. If you have any questions, you can contact us directly via WhatsApp at the numbers listed below, or via mail ID provided below.",
        "Mark your file names as your registered mail ID (Xyz@gmail.com) otherwise it may lead to disqualification."],

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["Problem statement","We will give a building plan consisting of the Ground floor and first floor. Participants have to design a 3-D model of the design given"],
            ["General","It is an individual event. Participants will have 24 hours from the time the problem statement is revealed to solve it.","The design file must follow the format described in the problem statement. Revit software is preferred for the competition."],
        ],
        
        // not sure
        pdf_present:true,
        pdf_link:"/media/pdf_events/Miniature.pdf",
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["Creativity","Number of objects made","Closeness to reality","Appearance"],

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },


    {
        name : "Crypto Trading Competition",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Crypto_Trading_Competition.jpg",
        organiser:[
            {
                name : "Sayandip Chaudhuri",
                pic :"/media/organisers/Sayandip_Chaudhuri.jpg",
                email :"76026 40139",
            },
            {
                name : "Sonu Shaw",
                pic :"/media/organisers/Sonu_Shaw.jpg",
                email :"87772 35490",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["As we all know, cryptocurrency is more than just a simple investment. As the sector grows, so does the demand for new talent. A talent with working knowledge of blockchain and cryptocurrencies.",
        "Pondering on wheter to invest in cryptocurrencies or gain real-world experience by trading cryptocurrency? You have come to the right place. People are hesitant to try it out as it is complicated, but it doesn't have to be. Trading on a live market using virtual money allows us to better comprehend market volatility and the benefits of money diversification across cryptos, as well as allowing us to gain real-world experience before entering the market with actual money."
        ],
        hover_description : "Finance",
       
        // have each rule as a element of an array
        rule_book_rules :["One entry is allowed per person",
        "Entries will be completely evaluated on the basis of return on investment (ROI).",
        "Competition will run for 15 days."],

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
           
            ["General","  The competition will be completely based on virtual money, every student will be given a certain amount of virtual money and time.","The student with the highest ROI will be the winner of the competition."],
        ],
        
        pdf_present:false,
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["Creativity","Number of objects made","Closeness to reality","Appearance"],

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },




    
    {
        name : "Crypto Trading Competition",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Crypto_Trading_Competition.jpg",
        organiser:[
            {
                name : "Sayandip Chaudhuri",
                pic :"/media/organisers/Sayandip_Chaudhuri.jpg",
                email :"76026 40139",
            },
            {
                name : "Sonu Shaw",
                pic :"/media/organisers/Sonu_Shaw.jpg",
                email :"87772 35490",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["As we all know, cryptocurrency is more than just a simple investment. As the sector grows, so does the demand for new talent. A talent with working knowledge of blockchain and cryptocurrencies.",
        "Pondering on wheter to invest in cryptocurrencies or gain real-world experience by trading cryptocurrency? You have come to the right place. People are hesitant to try it out as it is complicated, but it doesn't have to be. Trading on a live market using virtual money allows us to better comprehend market volatility and the benefits of money diversification across cryptos, as well as allowing us to gain real-world experience before entering the market with actual money."
        ],
        hover_description : "Finance",
       
        // have each rule as a element of an array
        rule_book_rules :["One entry is allowed per person",
        "Entries will be completely evaluated on the basis of return on investment (ROI).",
        "Competition will run for 15 days."],

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
           
            ["General","  The competition will be completely based on virtual money, every student will be given a certain amount of virtual money and time.","The student with the highest ROI will be the winner of the competition."],
        ],
        
        pdf_present:false,
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["Creativity","Number of objects made","Closeness to reality","Appearance"],

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },


]


export default Technical_Events_data;