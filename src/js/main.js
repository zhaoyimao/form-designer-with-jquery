function addForm(){
    $(document).ready(function(){
        $("#add").click(function(){
            $("#select_add_form").show();
        });
    });
};

function addSure(){
    $(document).ready(function(){
        $("#add_sure").unbind().bind('click',function(){
            let index="";
                index=$("select").val();
                if(index==="1"){
                    let text1="";
                    text1="<p><input type='text'/>&nbsp;&nbsp;<button class='delete' onclick='delete_form()'>删除</button></p>";
                $("#container").append(text1);
                }else if(index==="2"){
                 $("#container").append("<p><input type='date'>&nbsp;&nbsp;<button class='delete' onclick='delete_form()'>删除</button></p>");
                }
                $("#select_add_form").hide();
        });
    });
}
function Close(){
    $(document).ready(function(){
        $("#close").click(function(){
            $("#select_add_form").hide();
        });
    })
}

function delete_form(){
    $(document).ready(function(){
       $(".delete").click(function(){
           $(this).parent().remove();
       })
    })
}

function Preview(){
    $(document).ready(function(){
        $("#preview").unbind().bind('click',function(){
            $("button").hide();
            $("#container").find("*").attr('disabled',"true");  
            $("#edit").show();
        });
    });
}
function Edit(){
    $(document).ready(function(){
        $("#edit").unbind().bind('click',function(){
            $("#container").find("*").removeAttr("disabled");  
            $("button").show(); 
            $("#edit").hide();
        });
    });
}