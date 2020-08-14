(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("loan_product");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,718);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("loan_pd", this);
            obj._setContents("<ColumnInfo><Column id=\"lp_num\" type=\"INT\" size=\"256\"/><Column id=\"lp_name\" type=\"STRING\" size=\"256\"/><Column id=\"lp_interestrate\" type=\"INT\" size=\"256\"/><Column id=\"lp_cancelfee\" type=\"INT\" size=\"256\"/><Column id=\"lp_maximum\" type=\"INT\" size=\"256\"/><Column id=\"lp_dambo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchv", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">대출번호</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">대출명</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"name\">대출유형</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dambo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">무담보대출</Col><Col id=\"name\">무담보대출</Col></Row><Row><Col id=\"id\">담보대출</Col><Col id=\"name\">담보대출</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","30","28","470","630",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("loan_pd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"98\"/><Column size=\"53\"/><Column size=\"95\"/><Column size=\"84\"/><Column size=\"79\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대출번호\"/><Cell col=\"1\" text=\"대출명\"/><Cell col=\"2\" text=\"이자율\"/><Cell col=\"3\" text=\"중도상환수수료\"/><Cell col=\"4\" text=\"최대대부금액\"/><Cell col=\"5\" text=\"대출유형\"/></Band><Band id=\"body\"><Cell text=\"bind:lp_num\"/><Cell col=\"1\" text=\"bind:lp_name\"/><Cell col=\"2\" text=\"bind:lp_interestrate\"/><Cell col=\"3\" text=\"bind:lp_cancelfee\"/><Cell col=\"4\" text=\"bind:lp_maximum\"/><Cell col=\"5\" text=\"bind:lp_dambo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","510","30","290","349",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","7","65","100","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("대출명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","7","105","100","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("이자율");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","7","145","100","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("중도상환수수료");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","7","184","100","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("최대대부금액");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","7","225","100","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("대출유형");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("namev","108","66","150","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("interestratev","107","105","150","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("cancelfeev","107","145","150","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("maximumv","108","185","150","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("dambov","107","225","150","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dambo");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("담보대출");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("lpadd","104","265","80","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("저장하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","199","265","80","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("삭제하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","8","11","148","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("대출상품 등록 및 삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","510","399","290","259",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("searchtypev","14","79","105","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_innerdataset("searchv");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_text("대출번호");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("searchvaluev","129","79","140","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","174","139","91","39",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","12","17","143","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("대출상품 검색");
            this.Div01.addChild(obj.name, obj);

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
        this.registerScript("loan_product.xfdl", function() {
        //첫화면시 로딩이 되는 스크립트
        this.myload = function(obj,e){
        	var id = "urlTest01";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/all";
        	var reqDs = "";
        	var respDs = " loan_pd=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        }



        this.addlp = function(obj,e)
        {
        	var lp_name = encodeURI(this.Div00.form.namev.value,"UTF-8");
        	var lp_interestrate = encodeURI(this.Div00.form.interestratev.value,"UTF-8");
        	var lp_cancelfee = encodeURI(this.Div00.form.cancelfeev.value,"UTF-8");
        	var lp_maximum = encodeURI(this.Div00.form.maximumv.value,"UTF-8");
        	var lp_dambo = encodeURI(this.Div00.form.dambov.value,"UTF-8");
        	//this.alert("dname:"+dname_val+",loc:"+loc_val)
        	var id = "urlTest01";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/lpAdd?lp_name="+lp_name+"&lp_interestrate="+lp_interestrate
        	+"&lp_cancelfee="+lp_cancelfee+"&lp_maximum="+lp_maximum+"&lp_dambo="+lp_dambo;
        	var reqDs = "";
        	var respDs = "";
        	var args = "";
        	var callback = "myload";
        	this.transaction(id,url,reqDs,respDs,args,callback);

        };

        this.searchbtn = function(obj,e)
        {
        	this.alert("13");
        	var searchtype = this.Div01.form.searchtypev.value;
        	var searchvalue =this.Div01.form.searchvaluev.value;
        	this.alert(searchtype)
        	this.alert(searchvalue)
        	var id = "urlTest03";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/search?searchtype="+searchtype+"&searchvalue="+searchvalue;
        	var reqDs = "";
        	var respDs = " loan_pd=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received = function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};


        };

        this.dellp = function(obj,e)
        {
        	var lp_num = this.loan_pd.getColumn(this.loan_pd.rowposition,"lp_num");

        	var id = "urlTest01";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/lpdel?lp_num="+lp_num;
        	var reqDs = "";
        	var respDs = "";
        	var args = "";
        	var callback = "myload";
        	this.transaction(id,url,reqDs,respDs,args,callback);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.lpadd.addEventHandler("onclick",this.addlp,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.dellp,this);
            this.Div01.form.Button00.addEventHandler("onclick",this.searchbtn,this);
        };

        this.loadIncludeScript("loan_product.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
