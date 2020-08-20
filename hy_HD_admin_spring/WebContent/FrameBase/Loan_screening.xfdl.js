(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Loan_screening");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,718);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("lc_state", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"name\">선정중</Col></Row><Row><Col id=\"name\">서류제출대기</Col></Row><Row><Col id=\"name\">서류제출완료</Col></Row><Row><Col id=\"name\">심사중</Col></Row><Row><Col id=\"name\">대출승인</Col></Row><Row><Col id=\"name\">승인거절</Col></Row><Row><Col id=\"name\">실행완료</Col></Row><Row><Col id=\"name\">상환종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("lp_name", this);
            obj._setContents("<ColumnInfo><Column id=\"lp_name\" type=\"STRING\" size=\"256\"/><Column id=\"lc_num\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("screen", this);
            obj._setContents("<ColumnInfo><Column id=\"lc_num\" type=\"INT\" size=\"256\"/><Column id=\"lp_name\" type=\"STRING\" size=\"256\"/><Column id=\"lc_state\" type=\"STRING\" size=\"256\"/><Column id=\"mem_code\" type=\"INT\" size=\"256\"/><Column id=\"mem_name\" type=\"STRING\" size=\"256\"/><Column id=\"hd_code\" type=\"INT\" size=\"256\"/><Column id=\"la_hamount\" type=\"INT\" size=\"256\"/><Column id=\"la_startdate\" type=\"STRING\" size=\"256\"/><Column id=\"la_sysdate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("lc_num", this);
            obj._setContents("<ColumnInfo><Column id=\"lc_num\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","21","20","777","160",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calstartday","108","23","133","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy/MM/dd");
            obj.set_editformat("yyyy/MM/dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("calendday","278","23","133","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy/MM/dd");
            obj.set_editformat("yyyy/MM/dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","251","26","24","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","18","27","76","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("신청날짜 :");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","467","27","76","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("대출상태 :");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("lc_state","558","23","133","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("lc_state");
            obj.set_codecolumn("name");
            obj.set_datacolumn("name");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","18","69","76","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("대출명 :");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("lp_name","108","65","133","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("lp_name");
            obj.set_codecolumn("lp_name");
            obj.set_datacolumn("lp_name");
            obj.set_text("Combo01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","310","70","76","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("대출자명 :");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("mem_name","400","69","133","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("searchbtn","579","67","109","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","18","107","76","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("대출번호 :");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("lc_num","108","107","133","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("lc_num");
            obj.set_codecolumn("lc_num");
            obj.set_datacolumn("lc_num");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","21","200","777","388",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("screen");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"97\"/><Column size=\"95\"/><Column size=\"72\"/><Column size=\"83\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"93\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대출번호\"/><Cell col=\"1\" text=\"대출명\"/><Cell col=\"2\" text=\"대출상태\"/><Cell col=\"3\" text=\"회원번호\"/><Cell col=\"4\" text=\"회원명\"/><Cell col=\"5\" text=\"사원코드\"/><Cell col=\"6\" text=\"희망대출액\"/><Cell col=\"7\" text=\"희망대출일\"/><Cell col=\"8\" text=\"신청일\"/></Band><Band id=\"body\"><Cell text=\"bind:lc_num\"/><Cell col=\"1\" text=\"bind:lp_name\"/><Cell col=\"2\" text=\"bind:lc_state\"/><Cell col=\"3\" text=\"bind:mem_code\"/><Cell col=\"4\" text=\"bind:mem_name\"/><Cell col=\"5\" text=\"bind:hd_code\"/><Cell col=\"6\" text=\"bind:la_hamount\"/><Cell col=\"7\" text=\"bind:la_startdate\"/><Cell col=\"8\" text=\"bind:la_sysdate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("start","694","598","96","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("심사시작");
            this.addChild(obj.name, obj);

            obj = new Button("approval","580","598","96","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대출승인");
            this.addChild(obj.name, obj);

            obj = new Button("rejection","464","598","96","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("승인거절");
            this.addChild(obj.name, obj);

            obj = new Edit("lc_numv","74","613","105","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,718,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Loan_screening.xfdl","FrameBase::popupconf.xjs");
        this.registerScript("Loan_screening.xfdl", function() {
        this.executeIncludeScript("FrameBase::popupconf.xjs"); /*include "FrameBase::popupconf.xjs"*/;

        this.Loan_screening_onload = function(obj,e)
        {



        	this.getlp_name();
        	this.getsysdate();



        };

        this.getlp_name= function(obj,e)
        {
        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/lpname";
        	var reqDs = "";
        	var respDs = " lp_name=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        		this.Div00.form.lp_name.set_value(this.lp_name.getColumn(0,'lp_name'))
        		this.getlcnum();

        	};



        }
        this.getsysdate= function(obj,e)
        {
        	var currDate = new Date();
        	var year = currDate.getFullYear().toString().padLeft(4, "0");
        	var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
        	var day = currDate.getDate().toString().padLeft(2, "0");


        	this.Div00.form.calendday.set_value(year+month+day);
        	day = day - 7;
        	this.Div00.form.calstartday.set_value(year+month+day);
        }

        this.getscreen= function(obj,e)
        {

        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/getscreen";
        	var reqDs = "";
        	var respDs = " screen=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);

        	};
        }

        this.getlcnum= function(obj,e)
        {
        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/lcnum";
        	var reqDs = "";
        	var respDs = " lc_num=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        		this.Div00.form.lc_num.set_value(this.lc_num.getColumn(0,'lc_num'))

        	};



        }
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.lc_numv.set_value(this.screen.getColumn(this.screen.rowposition,"lc_num"))
        	var objForm = obj;
        	var objConfig = {
        						popupWidth		: 510,
        						popupHeight		: 320,
        						lc_num : this.lc_numv,
        						rejection : this.rejection_onclick,
        						approval : this.approval_onclick,
        						start : this.start_onclick
        				    }
        	this.gfn_initForm(objForm,objConfig);
        	var oArg = {
        		lc_num : this.lc_numv
        	}

        	this.gfn_showModal("popupModal", oArg, "FrameBase::Loan_detail.xfdl", "popupCallBack", this, 510, 320, true, true, null);
        };

        this.Div00_searchbtn_onclick = function(obj,e)
        {
        	var startdate = this.Div00.form.calstartday.value;
        	var enddate = parseInt(this.Div00.form.calendday.value) + 1;
        	var name = this.Div00.form.mem_name.value;
        	var state = encodeURI(this.Div00.form.lc_state.value,"UTF-8");
        	var lp_name = encodeURI(this.Div00.form.lp_name.value,"URF-8");
        	var lc_numv = this.Div00.form.lc_num.value;


        	if(name == null){
        	name = 'null';
        	}
        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/searchscreen?from_dt="+startdate+"&to_dt="+enddate+"&mem_name="+name+"&lc_state="+state+"&lp_name="+lp_name+"&lc_num="+lc_numv;
        	var reqDs = "";
        	var respDs = " screen=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received
        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };

        this.stateupdate = function (state,lc_num)
        {
        	var statev = encodeURI(state,"UTF-8")
        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/stateupdate?lc_state="+statev+"&lc_num="+lc_num;
        	var reqDs = "";
        	var respDs = "";
        	var args = "";
        	var callback = "Div00_searchbtn_onclick";
        	this.transaction(id,url,reqDs,respDs,args,callback);

        };

        this.start_onclick = function(obj,e)
        {
        	var state = '심사중'
        	var lc_num = this.screen.getColumn(this.screen.rowposition,"lc_num")
        	this.stateupdate(state,lc_num)
        };

        this.approval_onclick = function(obj,e)
        {
        	var state = this.approval.text
        	var lc_num = this.screen.getColumn(this.screen.rowposition,"lc_num")
        	this.stateupdate(state,lc_num)
        };

        this.rejection_onclick = function(obj,e)
        {
        	var state = this.rejection.text
        	var lc_num = this.screen.getColumn(this.screen.rowposition,"lc_num")
        	this.stateupdate(state,lc_num)
        };

        this.test = function ()
        {
        	var filename = "g1.jpg";
        	var filedir = "resources\\upload\\101"

        	var id = "urlTest01";
        	var url = "Service::filedown.jpg"
        	var reqDs = "";
        	var respDs = ""; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);

        	};

        };


        this.Div00_Button00_onclick = function(obj,e)
        {
        	//this.FileDownTransfer00.download()
        	this.test()
        };



        this.FileDownTransfer00_onerror = function(obj,e)
        {
        	//this.alert(e.errortype)
        	//this.alert(e.errormsg)
        	//this.alert(e.statuscode)
        	//this.alert("fail")
        };

        this.FileDownTransfer00_onsuccess= function(obj,e)
        {
        	//this.alert("sueccess")
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Loan_screening_onload,this);
            this.Div00.form.calendday.addEventHandler("onchanged",this.Div00_calendday_onchanged,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.lp_name.addEventHandler("onitemchanged",this.Div00_lp_name_onitemchanged,this);
            this.Div00.form.searchbtn.addEventHandler("onclick",this.Div00_searchbtn_onclick,this);
            this.Div00.form.lc_num.addEventHandler("onitemchanged",this.Div00_lc_num_onitemchanged,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.start.addEventHandler("onclick",this.start_onclick,this);
            this.approval.addEventHandler("onclick",this.approval_onclick,this);
            this.rejection.addEventHandler("onclick",this.rejection_onclick,this);
        };

        this.loadIncludeScript("Loan_screening.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
