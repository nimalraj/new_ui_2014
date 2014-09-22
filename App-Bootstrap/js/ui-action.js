// JavaScript Document
$(function () {  
	//start - equal height blocks
	//function for home page lower blocks equal heights
    equalheight = function(container){
			
	var currentTallest = 0,
		 currentRowStart = 0,
		 rowDivs = new Array(),
		 $el,
		 topPosition = 0;
	$(container).each(function() {
	
	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;
	
	   if (currentRowStart != topPostion) {
		 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		   rowDivs[currentDiv].height(currentTallest);
		 }
		 rowDivs.length = 0; // empty the array
		 currentRowStart = topPostion;
		 currentTallest = $el.height();
		 rowDivs.push($el);
	   } else {
		 rowDivs.push($el);
		 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		 rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}	
	//call the function on document ready
	equalheight('.finblocks .finbgblk, .finblocks .findrkbgblk, .finblocks .lesbgblk, .finblocks .lesdrkbgblk, .rgtblks .rgtblksin, .lesactblk .lesactblkin, .lesten-blk .col-md-2, .hgtout .hgtin');	
	//check resize blocks for responsive using window resize
	$(window).resize(function(){
	  equalheight('.finblocks .finbgblk, .finblocks .findrkbgblk, .finblocks .lesbgblk, .finblocks .lesdrkbgblk, .rgtblks .rgtblksin, .lesactblk .lesactblkin, .lesten-blk .col-md-2, .hgtout .hgtin');
	});	
    //end - equal height blocks
    
    //header menu top arrow on settings & user icon
    $('.setngsubmenu').css({'margin-top':'8px'});    
    $('.setngsubmenu').append('<div style="position: absolute; left:0; top: -14px; width:100%; background: url(images/hdr-dropdown-tparw.png) 127px 9px no-repeat;">&nbsp;</div>');
 
    
    //header userlist mtoggle
    $('.listdisp a').click(function() {
        $(this).parent().next().toggle();
    });
    
    //rollover financial users list
    $('.finvaruser').hover(function() {
        $(this).toggleClass('finvaruserh');
    });
    
    //tooltip toggle initiation 
    $("[data-toggle='tooltip']").tooltip();
    
    //dashboard table plugin initiation
    $('#dashpnltable').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 213,
			});            
    
    //dashboard trends table plugin initiation
    $('#trendstable').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 300,
	});    
    $('#trendstable2').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 300,
	}); 
    
    //dashboard leasinginfo table plugin initiation
    $('#lesinfo1, #lesinfo2, #lesinfo3, #lesinfo4, #lesinfo5').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 300,
	});    
            
    //financials table plugin initiation
    $('#finantable').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 450,
	});
    
    //prev next tr toggle financials receivables table comment tr
    $('.trtoggled').css({'display':'none'});
    $('.fincmtoggler').click(function (){
        $(this).parent().parent().next('.trtoggled').toggle();
    });
    
    //leasing alerts table plugin initiation
    $('#lesalrtable').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 350,
	});
    
    //leasing stacking table plugin initiation
    $('#lestacktabl').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 365,
	});
    
    //leasing abstract tabs bottom arrow
    $('<img src="images/les-arwdwn.png" alt="" style="margin-top: -4px;"/>').insertAfter('.les-absgreen .les-active');
    $('.les-active').parent('.metro-blks').css({'margin-bottom' : '0px'});
    
    //leasing abstract tabs table rows toggle
    $('.lestoggle').click(function() {
        $(this).parent().parent().next('.row').toggle();        
        $(this).children().attr('src', function(i, oldSrc) {
        return oldSrc == 'images/les-toggle-dw.png' ? 'images/les-toggle-up.png' : 'images/les-toggle-dw.png';
    });        
    });
    //leasing abstract tabs clauses delete hover show - general child dispno show
    $('.childhdnshw').hover(
    function() {
        $(this).children('.dispno').css({'display':'block'});
    },function() {
        $(this).children('.dispno').css({'display':'none'});
    }
    );
    
    //leasing stacking image append
    $('.shdw-bggreen').append('<img src="images/les-stck-cubegreen.png" alt="" class="cube-imgalign"/>');
    $('.shdw-bgblue').append('<img src="images/les-stck-cubeblue.png" alt="" class="cube-imgalign"/>');
    $('.shdw-bgfdblue').append('<img src="images/les-stck-cubefdblue.png" alt="" class="cube-imgalign"/>');
    $('.shdw-bgorng').append('<img src="images/les-stck-cubeorng.png" alt="" class="cube-imgalign"/>');
    $('.bgedshdw-lef, .bgedshdw-rgt').append('<img src="images/les-stck-cubegrey.png" alt="" class="cube-imgalign"/>');
    
    //gen table scroll table plugin initiation
    $('#tblvertscroll').fixedHeaderTable({ 
			footer: true, 
			altClass: 'odd',
			height: 400,
	});
    
    //script initiation for vert and horz fixed first col scroll
    $('#tblvrtcolfxscrol').fixedHeaderTable({ 
            footer: true, 
            cloneHeadToFoot: false, 
            fixedColumns: 1,
			altClass: 'odd',		
        	height: 400,         
	});     
    //overflow-x initiation for first col fixed scroll
    $('.horzscroll').parent('.fht-tbody').css({'overflow-x':'auto'});
    //script initiation for vert and horz fixed first col scroll
    
    //leasing pipeline form addbroker toggle
    $('.lespopform').css({'display':'none'});
    $('.lespopformshw').click(function() {        
        $('.lespopform').toggle();
    });
    //leasing pipeline form addbroker toggle
    
    //parent next toogle
    $('.parnxtogle').click(function() {
        $(this).parent().next().toggle();
    });
          
    //mega dropdown select portfolio link toggle
    $('.selctportfarw').click(function() {
       $('#megadropdown').toggle(); 
    //toggle dropdown arrow   
    $('.selctarw').attr('src', function(i, oldSrc) {
        return oldSrc == 'images/current-up.png' ? 'images/current.png' : 'images/current-up.png';
    });       
    });
    
    //mega dropdown close button
    $('.megadropclose').click(function() {
        $('#megadropdown').fadeOut();
        
        $('.selctarw').attr('src', function(i, oldSrc) {
        return oldSrc == 'images/current-up.png' ? 'images/current.png' : 'images/current-up.png';
    });
    });    
    
    //Trends Folder list Expand
    $('.dashselct-foldr').click(function() {
       $('#selectfolder').toggle(); 
    });
    
    //Trends Sub Folder list expand toggle
    $('.subfoldexpand').click(function() {
        $(this).next().toggle();
    });    
    //Trends Folder list close
    $('.selfoldclose').click(function() {
        $('#selectfolder').fadeOut();
    });
    
    //Trends icon tooltip hover
    $('.iconhover').hover(    
    function() {
        $(this).next('.iconhover-dispno').css({'display':'block'});
    },function() {
        $(this).next('.iconhover-dispno').css({'display':'none'});    
    }    
    );
    
    //financials tab color change
    $('.fintb a').click(function() {        
        $('.fintb a').removeClass('active');
        $(this).addClass('active');        
    });
    
    //financials operating statement row hover for addattachment link
    $('.finopst-hover').hover(    
    function() {
        $(this).next('.finopst-dispno').css({'display':'table-row'});
    },function() {
        $(this).next('.finopst-dispno').css({'display':'none'});    
    }    
    );
    
    //financials operating statement separator column height
    var opstrow = $('.opst-separater').parent('.row').height();
    $('.opst-separater').css({'height': opstrow +20 , 'background':'#ffffff'});
    $('.opst-separater.hgtmore').css({'height': opstrow +59 , 'background':'#ffffff'});   
    
    var purphgt = $('.purp-titlebg.purp-bgrad').height();
    $('.purp-titlebg.purp-bgrad .col-md-1').css({'margin-bottom': '-15px', 'margin-top': '-15px', 'height':purphgt+15});
    
    //financials operating statement row hover to display when moving to subrow also    
    $('.finopst-dispno').hover(    
    function() {
        $(this).css({'display':'table-row'});
    },function() {
        $(this).css({'display':'none'});    
    }    
    );
    //financials operating statement edit link hover
    $('.lnkdisphovr').hover(
    function() {
        $(this).next('.lnkdispno').css({'display':'block'});
    }
    );
    //financials operating statement to display on sub links hover also
    $('.lnkdispno').hover(
    function() {
        $(this).css({'display':'block'});
    },function() {
        $(this).css({'display':'none'});
    }
    );
    
    $('.trendanyl').hover(
    function() {
        $(this).children('.dispno').css({'display':'block'});
    },function() {
        $(this).children('.dispno').css({'display':'none'});
    }
    );
    
    //financials ytd calender icons list change    
    //financials prev link
    $('.calarwlf a').click(function() {
            var prev = $(this).parent().next('.calgroup');
            var previn = $(prev).children('.caldr-icon:visible');
            $(previn).css({'display':'none'}).prev().fadeIn();            
            var mm = $(previn).prev().height();
            if(mm == null) {
                $(prev).children().last().fadeIn();
            };
    });   
    //financials next link
    $('.calarwrgt a').click(function() {
           var next = $(this).parent().prev('.calgroup');
           var nextin = $(next).children('.caldr-icon:visible');
           $(nextin).css({'display':'none'}).next().fadeIn();            
           var mm = $(nextin).next().height();
           if(mm == null) {
               $(next).children().first().fadeIn();
           };
    });
    //financials ytd calender icons list change 
    
    $("#input1").change(function () {
    var value = this.value.substring(1);
    console.log(value);
    $("#slider1").slider("value", parseInt(value));
    });
    //financials operational statement variance drag bars initiator
    
    //financials operational statement table sub tr toggle query
    $('.opstparent').click(function() {                
       $(this).parent().parent().parent().parent().nextUntil('.hierarchy').next().toggleClass('dispno');
    });   
    
});

    //leasing encumbrance -> options textarea show, disable on checkbox click
    function toggleDisabled1(_checked) {
    document.getElementById('opcshw1').disabled = _checked ? false : true;
    }
    function toggleDisabled2(_checked) {
    document.getElementById('opcshw2').disabled = _checked ? false : true;
    }


