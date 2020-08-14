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
                this._setFormPosition(824,714);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Account", this);
            obj._setContents("<ColumnInfo><Column id=\"계좌코드\" type=\"INT\" size=\"256\"/><Column id=\"계좌네임\" type=\"STRING\" size=\"256\"/><Column id=\"계좌번호\" type=\"STRING\" size=\"256\"/><Column id=\"계좌주\" type=\"STRING\" size=\"256\"/><Column id=\"잔액\" type=\"STRING\" size=\"256\"/><Column id=\"계좌주번호\" type=\"STRING\" size=\"256\"/><Column id=\"계좌주직업\" type=\"STRING\" size=\"256\"/><Column id=\"계좌주성별\" type=\"STRING\" size=\"256\"/><Column id=\"계좌생성일\" type=\"STRING\" size=\"256\"/><Column id=\"계좌종료일\" type=\"STRING\" size=\"256\"/><Column id=\"멤버코드\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","30","27","1015","527",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("2px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("ac_numv","309","68","205","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","158","70","130","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("계좌번호");
            obj.set_font("24px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","562","70","134","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("계좌조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","32","341","946","175",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("3px dotted");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","760","15","141","46",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("입금하기");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("deposit_moneyv","503","15","234","50",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","413","13","93","47",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("입금액");
            obj.set_font("26px/normal \"Gulim\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","408","107","98","56",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출금액");
            obj.set_font("26px/normal \"Gulim\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("withdraw_moneyv","508","117","232","41",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","761","110","140","45",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("출금하기");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("deposit_spnamev","150","20","220","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","13","16","102","47",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("입금메모");
            obj.set_font("26px/normal \"Gulim\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","13","111","102","47",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("출금메모");
            obj.set_font("26px/normal \"Gulim\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("withdraw_spnamev","150","115","220","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","32","168","941","124",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("Account");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계좌코드\"/><Cell col=\"1\" text=\"계좌네임\"/><Cell col=\"2\" text=\"계좌번호\"/><Cell col=\"3\" text=\"계좌주\"/><Cell col=\"4\" text=\"잔액\"/><Cell col=\"5\" text=\"계좌주번호\"/><Cell col=\"6\" text=\"계좌주직업\"/><Cell col=\"7\" text=\"계좌주성별\"/><Cell col=\"8\" text=\"계좌생성일\"/><Cell col=\"9\" text=\"계좌종료일\"/><Cell col=\"10\" text=\"멤버코드\"/></Band><Band id=\"body\"><Cell text=\"bind:계좌코드\"/><Cell col=\"1\" text=\"bind:계좌네임\"/><Cell col=\"2\" text=\"bind:계좌번호\"/><Cell col=\"3\" text=\"bind:계좌주\"/><Cell col=\"4\" text=\"bind:잔액\"/><Cell col=\"5\" text=\"bind:계좌주번호\"/><Cell col=\"6\" text=\"bind:계좌주직업\"/><Cell col=\"7\" text=\"bind:계좌주성별\"/><Cell col=\"8\" text=\"bind:계좌생성일\"/><Cell col=\"9\" text=\"bind:계좌종료일\"/><Cell col=\"10\" text=\"bind:멤버코드\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,714,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Deposit.xfdl", function() {
        //계좌조회
        this.Div00_Button00_onclick = function(obj,e)
        {
        	var ac_numv=this.Div00.form.ac_numv.value;

        	var id="getaccount";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/getaccount?ac_num="+ac_numv;
        	var reqDs = "";
        	var respDs="Account=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		if(this.Account.getColumn(0,'계좌번호') != null){
        			this.Div00.form.Div00.form.deposit_moneyv.set_readonly(false)
        			this.Div00.form.Div00.form.withdraw_moneyv.set_readonly(false)
        			this.Div00.form.Div00.form.withdraw_spnamev.set_readonly(false)
        			this.Div00.form.Div00.form.deposit_spnamev.set_readonly(false)
        		}

        	};
        };
        //입금하기
        this.Div00_Div00_Button00_onclick = function(obj,e)
        {
        	var deposit_moneyv = this.Div00.form.Div00.form.deposit_moneyv.value
        	var deposit_spnamev = this.Div00.form.Div00.form.deposit_spnamev.value
        	var ac_numv =this.Account.getColumn(0,'계좌번호')
        	var mem_codev = this.Account.getColumn(0,'멤버코드')

        	//this.alert(deposit_moneyv+","+deposit_spnamev+","+ac_numv+","+mem_codev)
        	var id="deposit";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/deposit?ac_num="+ac_numv+"&mem_code="+mem_codev+"&money="+deposit_moneyv+"&sp_name="+deposit_spnamev;
        	var reqDs = "";
        	var respDs="";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{


        	};



        	this.Div00.form.Div00.form.deposit_moneyv.set_readonly(true)
        	this.Div00.form.Div00.form.withdraw_moneyv.set_readonly(true)
        	this.Div00.form.Div00.form.withdraw_spnamev.set_readonly(true)
        	this.Div00.form.Div00.form.deposit_spnamev.set_readonly(true)
        	this.Div00.form.Div00.form.deposit_moneyv.set_value('')
        	this.Div00.form.Div00.form.deposit_spnamev.set_value('')
        	this.Account.deleteAll()
        };
        //출금하기
        this.Div00_Div00_Button01_onclick = function(obj,e)
        {
        	var witdraw_moneyv = this.Div00.form.Div00.form.withdraw_moneyv.value
        	var withdraw_spnamev = this.Div00.form.Div00.form.withdraw_spnamev.value
        	var ac_numv =this.Account.getColumn(0,'계좌번호')
        	var mem_codev = this.Account.getColumn(0,'멤버코드')

        	//this.alert(witdraw_moneyv+","+withdraw_spnamev+","+ac_numv+","+mem_codev)

        	var id="withdraw";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/withdraw?ac_num="+ac_numv+"&mem_code="+mem_codev+"&money="+witdraw_moneyv+"&sp_name="+withdraw_spnamev;
        	var reqDs = "";
        	var respDs="";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{


        	};


        	this.Div00.form.Div00.form.deposit_moneyv.set_readonly(true)
        	this.Div00.form.Div00.form.withdraw_moneyv.set_readonly(true)
        	this.Div00.form.Div00.form.withdraw_spnamev.set_readonly(true)
        	this.Div00.form.Div00.form.deposit_spnamev.set_readonly(true)
        	this.Div00.form.Div00.form.withdraw_moneyv.set_value('')
        	this.Div00.form.Div00.form.withdraw_spnamev.set_value('')
        	this.Account.deleteAll()
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Div00.form.Button00.addEventHandler("onclick",this.Div00_Div00_Button00_onclick,this);
            this.Div00.form.Div00.form.Button01.addEventHandler("onclick",this.Div00_Div00_Button01_onclick,this);
        };

        this.loadIncludeScript("Deposit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
