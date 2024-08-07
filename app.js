     const parent = React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child"},
            
            [React.createElement("h1",{}, "iam h1 tag"),
                React.createElement("h2",{}, "iam h2 tag"),]),
                
                React.createElement("div",{id:"child1"},
            
                    [React.createElement("h3",{}, "iam h3 tag"),
                        React.createElement("h4",{}, "iam h4 tag"),]),
                        
                
                

            

     
    ]);
       
       
       
       
       
       const root = ReactDOM.createRoot(document.getElementById("header"));
       root.render(parent);
    