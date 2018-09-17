module.exports = function check(str, bracketsConfig) {
  // your solution
  var str1 = str.split(""), stack = [], element, open = 0, open7 = 0, open8 = 0;
  for(var i = 0; i < str1.length; i++){
    if(str1[i] == "(" || str1[i] == "[" || str1[i] == "{" || str1[i] == "1" || str1[i] == "5") 
    {
      stack.push(str1[i]);
    }
    else if(str1[i] == "|" && open == 0){
      open++;
      stack.push(str1[i]);
    }
    else if(str1[i] == "7" && open7 == 0){
      open7++;
      stack.push(str1[i]);
    }
    else if(str1[i] == "8" && open8 == 0){
      open8++;
      stack.push(str1[i]);
    }
    else {
      if(stack.length == 0) return false;
      element = stack.pop();
      if(element == "(" && str1[i] != ")") return false;
      if(element == "[" && str1[i] != "]") return false;
      if(element == "|"){
        if(str1[i] != "|") return false;
        else open = 0;
      }
      if(element == "7"){
        if(str1[i] != "7") return false;
        else open7 = 0;
      }
      if(element == "8"){
        if(str1[i] != "8") return false;
        else open8 = 0;
      }
      if(element == "{" && str1[i] != "}") return false;
      if(element == "1" && str1[i] != "2") return false;
      if(element == "5" && str1[i] != "6") return false;
    }
  }
  if(stack.length != 0) return false;
  else {
    for(var i = 0; i < bracketsConfig.length; i++){
        if(bracketsConfig[i][0] == "(" && bracketsConfig[i][1] != ")") return false;
        if(bracketsConfig[i][0] == "{" && bracketsConfig[i][1] != "}") return false;
        if(bracketsConfig[i][0] == "[" && bracketsConfig[i][1] != "]") return false;
        if(bracketsConfig[i][0] == "|" && bracketsConfig[i][1] != "|") return false;
        if(bracketsConfig[i][0] == "1" && bracketsConfig[i][1] != "2") return false;
        if(bracketsConfig[i][0] == "5" && bracketsConfig[i][1] != "6") return false;
        if(bracketsConfig[i][0] == "7" && bracketsConfig[i][1] != "7") return false;
        if(bracketsConfig[i][0] == "8" && bracketsConfig[i][1] != "8") return false;
    }
  }
  return true;
}