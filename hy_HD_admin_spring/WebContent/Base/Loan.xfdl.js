(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Loan");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("login", this);
            obj._setContents("<ColumnInfo><Column id=\"hd_id\" type=\"STRING\" size=\"256\"/><Column id=\"hd_pw\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","362","150","298","175",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("hd_id","116","44","119","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("hd_pw","116","84","119","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","53","47","43","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("사번");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","53","83","53","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","104","130","87","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","716","111","312","243",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("login");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"hd_id\"/><Cell col=\"1\" text=\"hd_pw\"/><Cell col=\"2\" text=\"check\"/><Cell col=\"3\" text=\"level\"/></Band><Band id=\"body\"><Cell text=\"bind:hd_id\"/><Cell col=\"1\" text=\"bind:hd_pw\"/><Cell col=\"2\" text=\"bind:check\"/><Cell col=\"3\" text=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","329","385","92","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지금누구");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","451","386","74","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Loan.xfdl", function() {
        onload=function(){

        var screeninfo = [
                   {"id":"Desktop_screen","type":"desktop","themeid":"theme::default","xadl":"Application_Desktop.xadl.js"}
        			];
        			nexacro._initHTMLSysEvent(window, document);

        			nexacro._initEnvironment(screeninfo);

                    nexacro._prepareManagerFrame(onloadframework);
        			}

        this.Div00_Button00_onclick = function(obj,e)
        {
        	//this.go("FrameBase::Form_Work.xfdl");
        	//this.Grid00=this.login
        	var hd_id=this.Div00.form.hd_id.value
        	var hd_pw=this.Div00.form.hd_pw.value
        	if((hd_id !=null) && (hd_pw !=null)){
        		//this.alert(hd_id+hd_pw)
        		//alert(this.login.getRowCount())
        		//alert(this.login.getColCount())
        		//this.login.deleteColumn(0)
        		//this.login.deleteRow(0)
        		//this.login.deleteAll();
        		//this.login.rowposition
        		var id="login";
        		var url = "http://192.168.0.122:8080/hy_HD_admin_spring/login?hd_id="+hd_id+"&hd_pw="+hd_pw;
        		var reqDs = "";
        		var respDs="login=ar";//
        		var args ="";
        		var callback ="received";
        		this.transaction(id,url,reqDs,respDs,args,callback);
        		this.received=function(id,code,message)
        		{
        			//alert(id+","+code+","+message);
        			//this.alert('checked')
        			/*
        			var i=0
        			while (i<5)
        			{
        				this.alert(this.login.getColumn(i,"check"))
        				i++
        			}*/

        			if(this.login.getColumn(0,"check")=='ok'){
        				//this.alert('go')
        				this.go("FrameBase::Form_Work.xfdl");
        			}

        		};

        		//this.alert('찍히긴함?')

        		}
        	//whoareyou()
        };
        whoareyou=function(){
        	this.alert("asdf")

        }

        //ㄴㄴ무시
        this.Button00_onclick = function(obj,e)
        {
        	this.alert("왜안대뮤")

        	var arrCookie = a//window.document.cookie;
            arrCookie = arrCookie.split(";");
        	this.alert("넥사크로넣기전ㄴ"+arrCookie)
        	//nexacro.setCookieVariable('logininfo',arrCookie.split("=")[1],false)



            var arrTempCookie;
            this.TextArea00.set_value("");
            for(var i=0; i<arrCookie.length; i++)
            {
                arrTempCookie = arrCookie[i].split("=");
                this.TextArea00.set_value(this.TextArea00.value
                    + ( arrTempCookie[0].trim() + " : " + arrTempCookie[1] ) + "\n");
            }
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.alert("넥사크로에서뽑아온값"+nexacro.getCookieVariable('logininfo',false))

        };

        this.Button03_onclick = function(obj,e)
        {
        	//로그아웃
        		var id="logout";
        		var url = "http://192.168.0.122:8080/hy_HD_admin_spring/logout";
        		var reqDs = "";
        		var respDs="";//
        		var args ="";
        		var callback ="received";
        		this.transaction(id,url,reqDs,respDs,args,callback);
        		this.received=function(id,code,message)
        		{
        			//alert(id+","+code+","+message);
        		};

        		//this.alert('찍히긴함?')


        };
        //로그인체크
        this.Button02_onclick = function(obj,e)
        {
        		var id="logincheck";
        		var url = "http://192.168.0.122:8080/hy_HD_admin_spring/logincheck";
        		var reqDs = "";
        		var respDs="login=ar";//
        		var args ="";
        		var callback ="received";
        		this.transaction(id,url,reqDs,respDs,args,callback);
        		this.received=function(id,code,message)
        		{
        			alert(id+","+code+","+message);
        		};





        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("Loan.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
