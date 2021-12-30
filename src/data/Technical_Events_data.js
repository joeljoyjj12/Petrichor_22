const Technical_Events_data=[
    {
        name : "Robo Soccer",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "15-01-2022",
        end_date : "22-01-2022",
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
        description: ["Say hello to the world of virtual robotics! Spar online with Lego bots in a soccer match! Customize your dream bot and turn it into an undefeatable champion. Sport your coding skills to perfect it...", 
        "We, Petrichor warmly welcome all Robo geeks to take part in Robo Soccer. exciting prizes await you, the Dr. Tenma of tomorrow! You can participate in this event individually as well as in a team, with not more than two members"
        ],
        hover_description : "Say hello to the world of virtual robotics! Spar online with Lego bots in a soccer match!",
        extra_link :"https://drive.google.com/file/d/11vzunFzC4ULKyIN3t_FFa11hqoyd_Ex8/view",
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
        start_date : "13-01-2021",
        end_date : "27-01-2021",
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
        hover_description : "Navigating the Labyrinth",
       
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
        start_date : "15-01-2022",
        end_date : "15-01-2022",
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
        description: ["Get ready to participate in IIT Pkd's petrichor cp contest. Where your cp and problem-solving skills will be put to test through several mind boggling innovative coding questions.", 
        "Get a chance to compete among the best coders and show off your coding skills and win prizes worth 5k, all through the comfort of your home."
        ],
        hover_description : "Test your cp and problem-solving skills through several mind boggling and innovative coding questions.",
       
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
        start_date : "16-01-2022",
        end_date : "19-01-2022",
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
        hover_description : "Predicting the Future isnt magic, it is Artifical Intelligence",
       
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
        start_date : "22-01-2022",
        end_date : "25-01-2022",
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
        description: ["Petrichor allows you to compete against more than 290 colleges all over India, so show off your design talents. ", 
        "D-SIGN, the competition where competitors will be given a set of guidelines based on a theme, and are supposed to solve the task using their own innovative ideas and ingenuity."
        ],
        hover_description : "Bringing out the Innovator in you",
       
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
        hover_description : "Need a tagline here",
       
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
        hover_description : "Dive Deep into Crypto",
       
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
        name : "Quiz Marathon",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Quiz_Marathon.jpg",
        organiser:[
            {
                name : "Amar Hamdan",
                pic :"/media/organisers/Amar_Hamdan.jpg",
                email :"86066 65885",
            },
            {
                name : "Sriramoju Chinmayee",
                pic :"/media/organisers/Sriramoju_Chinmayee.jpg",
                email :"93910 88714",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["Petrichor, IIT Palakkad brings you continuous joy in knowledge with the 3-day Quiz marathon conducted in the month of January. Forget about the regular academic quizzes and get ready with exciting topics like space, astronomy, music, movies, paintings, riddles and many more.",
        "Your favourite topics can push you to the top and collect a total prize pool of Rs. 12,000 and prestigious certificates from IIT."
        ],
        hover_description : "Unlocking knowledge at the speed of thought",
       
        // have each rule as a element of an array
        rule_book_rules :
        [
        "General Instructions",
        "The quiz will be a time-trial, i.e., the number of questions is sufficient to keep you occupied for the entire duration of the quiz. Therefore, if you try to search for answers, you will lose valuable time.",
        "Only one attempt will be allowed per participant in each round. So ensure that you have proper internet connection and power-supply/charge on your device",
        "Preliminary round is open for all participants. Hence you must attend both Round I & II to be eligible for the participation certificates.",
        "The combined score in Round I & II will be used for the leaderboard for finals.",
        "Participants can attempt the quiz through PC/Laptop/Tab/Mobile, preferably PC/Laptop for easy navigation through questions.",
        "All participants have to join a zoom meeting for the quiz.",
        "Details of the zoom meeting will be shared to the participants via email.",
        "All participants must join the zoom meeting shared to them at least 5 minutes before the scheduled time.",
        "This is a solo event. So any discussion with other participants or help from other sources are strictly prohibited.",
         
        "Rules - Prelims (Round 1 & 2)",
        "The link to the quiz website will be given to the participants in the zoom meeting. Participants have to join the given quiz link and try to solve as many questions as they can before the time runs out.",
        "Participants must keep their camera turned ON throughout the meeting.",
        "Participants should unmute the microphone only when they are asked to do so.",
        "Participants must make sure that they are seated in a separate room without much distractions and background noises.",
        "If the participant leaves the meeting or gets disconnected, he/she will NOT be allowed to join again for this round.",
         
        "Rules - Finals",
        "This round is completely conducted over Zoom.",
        "Participants must keep their camera turned ON throughout the meeting.",
        "Questions will be displayed on the screen and participants have to   type the answers in the chat box within the time limit mentioned by the quiz master for each question. Note: Only the host will be able to see the answers.",
        "There will be a total of 5 small rounds in the finals, details of which will be shared on the day of the finals.",
        "If the participant leaves the meeting or gets disconnected, he/she can join the meeting again. But you may lose time to answer the questions.",],

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
            ["Category - 1 (Class: 8th, 9th, 10th)"],
            
            [
            "Preliminary Round I (Day-1)",
            "Number of Questions: 20",
            "Total Time: 15 minutes",
            "Date: DD/MM/YYYY",
            "Eligibility: All students currently studying in class 8/9/10",
            "Platform: itsquiz.com"],
            
            ["Syllabus",
            "Indian history & world geography",
            "Literature & Nobel price",
            "Invention & Inventors",
            "Current Affairs",
            "Riddles"],
            
            [
            "Preliminary Round II (Day-2)",
            "Number of Questions: 20",
            "Total Time: 15 minutes",
            "Date: DD/MM/YYYY",
            "Eligibility: All participants",
            "Platform: itsquiz.com",
            ],
            
            ["Syllabus",
            "Sports",
            "Mental ability",
            "Movies & music",
            "Space & Astronomy",
            "Paintings & Logo’s & Food science"],
             
            [
            "Finals (Day-3)",
            "Date: DD/MM/YYYY",
            "Eligibility: Top 15 participants after Round II",
            "Platform: Zoom(live streaming)",
            "Syllabus: Entire syllabus from Round I & II",
            ],
             
            
            ["Category-2 (Class: 11th & 12th)"],
             
            
            [
            "Preliminary Round I (Day-1)",
            "Number of Questions: 20",
            "Total Time: 15 minutes",
            "Date: DD/MM/YYYY",
            "Eligibility: All students currently studying in class 11/12.",
            "Platform: itsquiz.com",
            ],
            
            [
            
            "Syllabus",
            "Finance",
            "Chemistry (inorganic, Organic, Physical)",
            "Biology (Tech in biology)",
            "Maths (mental ability based)",
            "Physics (Basic laws, inventions etc..)",
            ],
             
            [
            "Preliminary Round II (Day-2)",
            "Number of Questions: 20",
            "Total Time: 15 minutes",
            "Date: DD/MM/YYYY",
            "Eligibility: All participants",
            "Platform: itsquiz.com",
            ],
             
            [
            "Syllabus",
            "Latest technologies",
            "Riddles",
            "Sports",
            "Movies & music",
            "Paintings and logos",
            ],
             
            [
            "Finals (Day-3)",
            "Date: DD/MM/YYYY",
            "Eligibility: Top 15 participants after Round II",
            "Platform: Zoom(live streaming)",
            "Syllabus: Entire syllabus from Round I & II",
            ],
            
            ],
        
        pdf_present:false,
        
        // reccommended make is true and write down the rest
        judging_criteria_show : false,
        // judging_criteria : ["Creativity","Number of objects made","Closeness to reality","Appearance"],

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["Rs. 10,000 ", "PS 5"],
    },


    {
        name : "SPEED TYPING COMPETITION",
        // jerry check if it is yyyyy-mm-dd or reverse
        start_date : "12-02-2021",
        end_date : "14-02-2022",
        // date to compete link
        registeration_link : "https://www.google.com/",
        // the pic should be locally uploaded
        picture: "/media/cult_event_pic/Crypto_Trading_Competition.jpg",
        organiser:[
            {
                name : "VM Sreeram",
                pic :"/media/organisers/VM_Sreeram.jpg",
                email :"97782 07916",
            },
            {
                name : "Ravi Ranjan",
                pic :"/media/organisers/Ravi_Ranjan.jpg",
                email :"77394 63363",
            },
        ],
        // first element will be bolded, I think u can only have 2 paras (map)
        description: ["Everyone wants to be the first. In this online era, to become ahead among your friends you need to have faster speed typing skills whether you need to write an email or insert data and for so many reasons. To test your typing skill, we are bringing this speed typing event where you can check your typing speed among your batchmates from various schools."
        ],
        hover_description : "Ready Set Type",
       
        // have each rule as a element of an array
        rule_book_rules :["The contest is open for the students of class 9th to 12th (Up to secondary level), age limit is 18 years.",
        "He/she must be a student of 9th to 12th class.",
        "Maximum age should be 18 years.",
        "They must have a laptop/PC with a webcam for contesting in the competition. For those Without a webcam, having a phone with a front cam is necessary.",
        "They have a Zoom client installed for proctoring during the contest.",
        "School ID Card is required for verification Purpose.",
        "Must follow all the rules specified by the Competition platform and us.",
        "Student who will register have to sit in the front of Webcam of your Laptop/PC while contesting Competition.",
        "We will share a Competition link in the Zoom Meeting itself.",
        "You have to join a zoom meeting with Webcam and Contesting Competition simultaneously during the whole time of the competition.",
        "There is no entry fee, it is free of cost.",
        "If anyone will be caught doing Malpractices or indulging in unfair practices or violation of rules will be disqualified from competition at that time itself.",
        "All the rights to change any rules of the competition without prior notice to contestants and to disqualify any contestant whom the jury declares having indulged in any kind of malpractice is reserved with the organisers.",	
        "Documents Required for Competition are School ID and Latest photo",
        ]
        ,

        //recommended always show true,
        //instructure in each array row, the first 
        structure_show:true,
        structure:[
           
            ["General","We will take the Contest in 3 Rounds. All the rounds will have a 2 minutes time limit. You will be given 2 attempts in all rounds, from which your personal best is considered for rank calculation.","Round 1- Top 30 will be progressed to Round 2.","Round 2- Top 10 will progress to the Next Round.","Round 3- Top 3 will be declared as Winners."],
        ],
        
        pdf_present:false,
        
        // reccommended make is true and write down the rest
        judging_criteria_show : true,
        judging_criteria : ["Rank will be decided on the basis of WPM(Word Per Minute).",
            "If WPM is equal then rank will be decided on the basis of CPM",
            "If the same WPM: the highest CPM wins.",
            "If the same CPM: the lowest wrong words wins.",
            "If the same CPM/wrong words: the lowest corrections wins.",
            "If same CPM/wrong words/corrections: the earlier test result will be taken for winning."]
            ,

        prizes_general_text : "We have a exciting prized waiting for you",
        prizes_in_ascending_order: ["₹ 3000","₹ 1000","₹ 500"],
    },



]


export default Technical_Events_data;