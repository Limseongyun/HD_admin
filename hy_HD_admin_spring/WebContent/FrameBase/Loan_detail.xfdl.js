(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Loan_detail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("detail", this);
            obj._setContents("<ColumnInfo><Column id=\"lc_num\" type=\"INT\" size=\"256\"/><Column id=\"mem_email\" type=\"STRING\" size=\"256\"/><Column id=\"mem_name\" type=\"STRING\" size=\"256\"/><Column id=\"mem_birth\" type=\"STRING\" size=\"256\"/><Column id=\"la_hamount\" type=\"INT\" size=\"256\"/><Column id=\"la_sysdate\" type=\"STRING\" size=\"256\"/><Column id=\"lp_name\" type=\"STRING\" size=\"256\"/><Column id=\"la_startdate\" type=\"STRING\" size=\"256\"/><Column id=\"lc_state\" type=\"STRING\" size=\"256\"/><Column id=\"lr_type\" type=\"STRING\" size=\"256\"/><Column id=\"la_livingterm\" type=\"STRING\" size=\"256\"/><Column id=\"la_repayterm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","9","8","491","306",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대출정보 상세보기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","27","33","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대출번호 : ");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","216","36","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이메일 : ");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","27","66","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청자명 :");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","27","107","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("대출금액");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","27","145","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("대출명 :");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","27","187","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대출상태 :");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","27","227","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("거치기간 :");
            this.addChild(obj.name, obj);

            obj = new Edit("lc_num","100","36","61","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("mem_email","290","36","141","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("mem_name","100","69","61","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("la_hamount","100","110","61","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("lp_name","100","150","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("lc_state","100","190","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("la_livingterm","100","230","61","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("la_sysdate","289","110","121","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","216","107","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("대출신청일 :");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","216","145","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("대출희망일 :");
            this.addChild(obj.name, obj);

            obj = new Edit("la_startdate","289","150","121","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("lr_type","289","190","121","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","216","187","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("상환방법 : ");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","216","227","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("상환기간 :");
            this.addChild(obj.name, obj);

            obj = new Edit("la_repayterm","289","230","61","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","216","66","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("신청자명 :");
            this.addChild(obj.name, obj);

            obj = new Edit("mem_birth","289","69","61","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("exit","410","270","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("나가기");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","319","270","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("심사시작");
            this.addChild(obj.name, obj);

            obj = new Button("approval","229","270","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("대출승인");
            this.addChild(obj.name, obj);

            obj = new Button("rejection","139","270","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("승인거절");
            this.addChild(obj.name, obj);

            obj = new Button("filecheck","49","270","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("첨부파일");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,320,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Loan_detail.xfdl","FrameBase::popupconf.xjs");
        this.registerScript("Loan_detail.xfdl", function() {
        this.executeIncludeScript("FrameBase::popupconf.xjs"); /*include "FrameBase::popupconf.xjs"*/;
        this.Loan_detail_onload = function(obj,e)
        {

        	//trace(this.opener.name);

        	//get arguments
        	lc_num = this.parent.lc_num.value

        		var id = "urlTest01";
        		var url = "http://192.168.0.18:8080/hy_HD_admin_spring/getdetail?lc_num="+lc_num;
        		var reqDs = "";
        		var respDs = " detail=ar"; //데이터 셋을 response
        		var args = "";
        		var callback = "received";
        		this.transaction(id,url,reqDs,respDs,args,callback);
        		this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        		this.lc_num.set_value(this.detail.getColumn(0,'lc_num'))
        		this.mem_email.set_value(this.detail.getColumn(0,'mem_email'))
        		this.mem_name.set_value(this.detail.getColumn(0,'mem_name'))
        		this.mem_birth.set_value(this.detail.getColumn(0,'mem_birth'))
        		this.la_hamount.set_value(this.detail.getColumn(0,'la_hamount'))
        		this.la_sysdate.set_value(this.detail.getColumn(0,'la_sysdate'))
        		this.lp_name.set_value(this.detail.getColumn(0,'lp_name'))
        		this.la_startdate.set_value(this.detail.getColumn(0,'la_startdate'))
        		this.lc_state.set_value(this.detail.getColumn(0,'lc_state'))
        		this.lr_type.set_value(this.detail.getColumn(0,'lr_type'))
        		this.la_livingterm.set_value(this.detail.getColumn(0,'la_livingterm'))
        		this.la_repayterm.set_value(this.detail.getColumn(0,'la_repayterm'))
        	};





        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.lc_state.set_value('심사중')
        	this.opener.start_onclick();
        };

        this.rejection_onclick = function(obj,e)
        {
        	this.lc_state.set_value('승인거절')
        	this.opener.rejection_onclick()
        };

        this.approval_onclick = function(obj,e)
        {
        	this.lc_state.set_value('대출승인')
        	this.opener.approval_onclick()
        };

        this.exit_onclick = function(obj,e)
        {
        	this.close()
        };

        this.filecheck_onclick = function(obj,e)
        {
        	var objForm = obj;
        	var objConfig = {
        						popupWidth		: 510,
        						popupHeight		: 320,
        						lc_num : this.lc_num,

        				    }
        	this.gfn_initForm(objForm,objConfig);


        	var oArg = {
        		lc_num : this.lc_num
        	}



        	this.gfn_showModal("fileModal", oArg, "FrameBase::Loan_file.xfdl", "popupCallBack", this, 510, 320, true, true, null);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("canlayoutchange",this.Loan_detail_canlayoutchange,this);
            this.addEventHandler("onload",this.Loan_detail_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_03_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_04_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_05_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.exit.addEventHandler("onclick",this.exit_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.approval.addEventHandler("onclick",this.approval_onclick,this);
            this.rejection.addEventHandler("onclick",this.rejection_onclick,this);
            this.filecheck.addEventHandler("onclick",this.filecheck_onclick,this);
        };

        this.loadIncludeScript("Loan_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
