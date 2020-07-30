(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Deposit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Account", this);
            obj._setContents("<ColumnInfo><Column id=\"계좌번호\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","246","127","969","527",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("2px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","175","70","205","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","24","72","130","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("계좌번호");
            obj.set_font("24px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","410","74","134","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("계좌조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","32","341","860","175",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("3px dotted");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","361","12","116","46",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("입금하기");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","97","12","224","50",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","7","10","83","47",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("입금액");
            obj.set_font("26px/normal \"Gulim\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","2","104","88","56",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출금액");
            obj.set_font("26px/normal \"Gulim\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","102","114","222","41",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","355","107","130","45",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("출금하기");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","37","177","853","135",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj._setContents("");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Deposit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
