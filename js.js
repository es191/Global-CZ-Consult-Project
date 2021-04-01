    var CurrentIndex=0;
    var CurrentCompanyInfoIndex=0;

    ChangeCompanyInfo(CurrentCompanyInfoIndex);
    ChangeSlide(CurrentIndex);


   function SelectSlide(Index)
    {
     ChangeSlide(Index);
   }

    function MoveSlide(I)
   {
    CurrentIndex=CurrentIndex+I;
    ChangeSlide(CurrentIndex);
     }

   function ChangeSlide(Index)
    {
     var i;
     var SlideList=document.getElementsByClassName("element_slide");
     var CircleList=document.getElementsByClassName("element_slider_circle");
     if (Index>SlideList.length-1){Index=0;}
     if (Index<0){Index=SlideList.length-1;}
     CurrentIndex=Index;
     for (i=0;i<SlideList.length;i++)
     {
         SlideList[i].style.display="none";
     }
     SlideList[Index].style.display="flex";
    }

    function ChangeCompanyInfo(CurrentCompanyInfoIndex)
    {
     var InfoBoxList=document.getElementsByClassName("element_conmpany_info_box");
     var LogoBoxList=document.getElementsByClassName("element_company_logo_box");
     var i;
    //  console.log(LogoBoxList.length);
    //  console.log(InfoBoxList.length);
    //  console.log(InfoBoxList);
    //  console.log(LogoBoxList);

     for (i=0;i<LogoBoxList.length;i++)
     {
         //console.log(i);
         //LogoBoxList[i].style.backgroundColor="black";
        InfoBoxList[i].style.display="none";
     }

     //LogoBoxList[CurrentCompanyInfoIndex].style.backgroundColor="moccasin";
     InfoBoxList[CurrentCompanyInfoIndex].style.display="block";
   }
  
    // ORDER FORM

    function openForm() {
        document.getElementById("main_order").style.display = "block";
    }

    function closeForm() {
        document.getElementById("main_order").style.display = "none";
        
    }
    
