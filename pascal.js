function pascalApp (rows) {
    var tri = [];
    
    for (var a = 0; a < rows; a++) { 
        tri[a] = new Array(a+1);      
      for (var b = 0; b < a+1; b++) {            
        if (b === 0 || b === i) {
            tri[a][b] = 1;
        } else {
            tri[a][b] = tri[a-1][b-1] + tri[a-1][b];
        }
      }
    }
    
    return tri;
  }

  pascalApp(6);