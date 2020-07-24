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

            
            // UI Components Initialize
            obj = new Div("Div00","362","150","298","175",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","116","44","119","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","116","84","119","26",null,null,null,null,null,null,this.Div00.form);
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
        this.go("FrameBase::Form_Work.xfdl");
        	//onload()

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("Loan.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
