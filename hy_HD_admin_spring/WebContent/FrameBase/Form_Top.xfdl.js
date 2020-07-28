(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("login", this);
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Menu("Menu00","200","0","310","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset0");
            obj.set_captioncolumn("menu_name");
            obj.set_idcolumn("menu_id");
            obj.set_levelcolumn("menu_level");
            obj.set_background("#1369D8");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#1572E8");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","199","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","905","7","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Edit("who","646","7","219","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        //첫화면 로딩이 되는 스크립트
        this.myload = function(obj,e){
        	var id="loginingo";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/logincheck";
        	var reqDs = "";
        	var respDs=" login=ar";//대이터 셋을 response
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        		this.who.set_value(this.login.getColumn(0,"check")+" 환영합니다")
        		//this.alert('ss')
        	};

        }
        this.Button00_onclick = function(obj,e)
        {
        /*
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
        		*/
        	//this.go("Base::Loan.xfdl");
        	//this.go("Base::Loan.xfdl");
        	location.reload()
        	//this.alert(sib)



        	//nexacro.getApplication().get
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myload,this);
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
            this.Div00.form.ImageViewer00.addEventHandler("onclick",this.Div00_ImageViewer00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
