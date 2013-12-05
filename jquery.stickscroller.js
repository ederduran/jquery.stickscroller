/**
	//@name StickScroller
	//@author Eder Duran @pelitosduran & Leo Gutierrez @leowolfdragon
	//@version 1.0

	StickScrollTop = 198; //Definimos en que momento empieza el stick fixed	
	StickScrollDown = 250; // Definimos cuando deja de ser stick al final del documento
	StickElement = ".aside"; //elemto que hara stick
	ClassToAddStick = "stickit"; //clase stick
	ClassToAddOnBottom = "stickit-end"; //clase que se agrega cuando deja de ser stick al final del documento

	//llamamos la funcion StickScroller
	StickScroller();
 */

//Valores predeterminados ..
StickScrollTop = 0; //Definimos en que momento empieza el stick fixed	
StickScrollDown = 0; // Definimos cuando deja de ser stick al final del documento
StickElement = ".aside"; //elemto que hara stick
ClassToAddStick = "stickit"; //clase stick
ClassToAddOnBottom = "stickit-end"; //clase que se agrega cuando deja de ser stick al final del documento

StickScroller = function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= StickScrollTop) { 
	        $(StickElement).addClass(ClassToAddStick);
	    }
	    else if ($(this).scrollTop() < StickScrollTop)
	    {
	    	$(StickElement).removeClass(ClassToAddStick);
	    }
	    if($(window).scrollTop() + $(window).height() >= $(document).height() - StickScrollDown) {
	       $(StickElement).removeClass(ClassToAddStick);
	       $(StickElement).addClass(ClassToAddOnBottom);
	   }
	   else if($(window).scrollTop() + $(window).height() < $(document).height() - StickScrollDown && $(this).scrollTop() >= StickScrollTop) {
	       $(StickElement).removeClass(ClassToAddOnBottom);
	       $(StickElement).addClass(ClassToAddStick);
	   }
	});
};