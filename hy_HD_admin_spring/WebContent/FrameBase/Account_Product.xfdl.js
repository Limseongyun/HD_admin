(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Account_Product");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("QualificationList", this);
            obj._setContents("<ColumnInfo><Column id=\"qua_code\" type=\"INT\" size=\"256\" sumtext=\"\"/><Column id=\"qua_name\" type=\"STRING\" size=\"256\"/><Column id=\"qua_maxage\" type=\"INT\" size=\"256\"/><Column id=\"qua_minage\" type=\"INT\" size=\"256\"/><Column id=\"qua_maxmoney\" type=\"INT\" size=\"256\"/><Column id=\"qua_minmoney\" type=\"INT\" size=\"256\"/><Column id=\"qua_maxperiod\" type=\"INT\" size=\"256\"/><Column id=\"qua_minperiod\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("SavingList", this);
            obj._setContents("<ColumnInfo><Column id=\"sav_code\" type=\"INT\" size=\"256\"/><Column id=\"sav_name\" type=\"STRING\" size=\"256\"/><Column id=\"sav_interestrate\" type=\"INT\" size=\"256\"/><Column id=\"sav_online\" type=\"INT\" size=\"256\"/><Column id=\"shas_code\" type=\"INT\" size=\"256\"/><Column id=\"qua_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ProductList", this);
            obj._setContents("<ColumnInfo><Column id=\"pro_code\" type=\"INT\" size=\"256\"/><Column id=\"ins_code\" type=\"INT\" size=\"256\"/><Column id=\"sav_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Shared_Saving", this);
            obj._setContents("<ColumnInfo><Column id=\"shas_code\" type=\"INT\" size=\"256\"/><Column id=\"shas_count\" type=\"INT\" size=\"256\"/><Column id=\"shas_master\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Installment_Saving", this);
            obj._setContents("<ColumnInfo><Column id=\"ins_code\" type=\"INT\" size=\"256\"/><Column id=\"ins_name\" type=\"STRING\" size=\"256\"/><Column id=\"ins_online\" type=\"INT\" size=\"256\"/><Column id=\"ins_interestrate\" type=\"INT\" size=\"256\"/><Column id=\"ins_droprate\" type=\"INT\" size=\"256\"/><Column id=\"ins_putmoney\" type=\"INT\" size=\"256\"/><Column id=\"ins_term\" type=\"INT\" size=\"256\"/><Column id=\"shac_code\" type=\"INT\" size=\"256\"/><Column id=\"qua_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Shared_Challenge", this);
            obj._setContents("<ColumnInfo><Column id=\"shac_code\" type=\"INT\" size=\"256\"/><Column id=\"shac_mannum\" type=\"INT\" size=\"256\"/><Column id=\"shac_master\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","18","20","1192","660",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_border("3px dashed");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Product_tab",this.Tab00);
            obj.set_text("프로덕트");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("productGrid","490","54","300","456",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("1");
            obj.set_binddataset("ProductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"pro_code\"/><Cell col=\"1\" text=\"ins_code\"/><Cell col=\"2\" text=\"sav_code\"/><Cell row=\"1\" text=\"프로덕트코드\"/><Cell row=\"1\" col=\"1\" text=\"적금코드\"/><Cell row=\"1\" col=\"2\" text=\"예금코드\"/></Band><Band id=\"body\"><Cell text=\"bind:pro_code\"/><Cell col=\"1\" text=\"bind:ins_code\"/><Cell col=\"2\" text=\"bind:sav_code\"/></Band></Format></Formats>");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Static("Static00","9","29","140","43",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("0");
            obj.set_text("프로덕트 코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Edit("pro_codev","135","33","150","40",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Static("Static00_00","35","106","83","43",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("3");
            obj.set_text("적금 코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Static("Static00_01","38","187","89","43",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("4");
            obj.set_text("예금 코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Button("Button00","192","250","145","45",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("5");
            obj.set_text("상품화");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Combo("del_pro_codev","211","364","122","43",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ProductList");
            obj.set_codecolumn("pro_code");
            obj.set_datacolumn("pro_code");
            obj.set_text("Combo00");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Button("Button01","489","16","214","22",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("7");
            obj.set_text("프로덕트조회");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Combo("sav_codev","135","188","150","40",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("8");
            obj.set_innerdataset("SavingList");
            obj.set_codecolumn("sav_code");
            obj.set_datacolumn("sav_code");
            obj.set_text("Combo02");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Radio("product_radio","295","92","109","153",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Product_tab_form_product_radio_innerdataset = new nexacro.NormalDataset("Tab00_Product_tab_form_product_radio_innerdataset", obj);
            Tab00_Product_tab_form_product_radio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">적금선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">예금선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Product_tab_form_product_radio_innerdataset);
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Button("Button02","343","361","88","48",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("10");
            obj.set_text("제거");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Combo("ins_codev","135","110","150","40",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("11");
            obj.set_innerdataset("Installment_Saving");
            obj.set_codecolumn("ins_code");
            obj.set_datacolumn("ins_code");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","29","361","186","43",null,null,null,null,null,null,this.Tab00.Product_tab.form);
            obj.set_taborder("12");
            obj.set_text("삭제할 프로덕트  코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Product_tab.addChild(obj.name, obj);

            obj = new Tabpage("Qualification_tab",this.Tab00);
            obj.set_text("자격요건");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("qua_div","21","24","329","542",null,null,null,null,null,null,this.Tab00.Qualification_tab.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("0px dotted");
            this.Tab00.Qualification_tab.addChild(obj.name, obj);

            obj = new Static("Static00","1","23","127","30",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("0");
            obj.set_text("자격요건코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_codev","131","18","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("sdf","18","79","103","33",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("2");
            obj.set_text("자격요건명>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_namev","131","75","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("3");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_01","2","125","115","28",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("4");
            obj.set_text("최대가입나이>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxagev","131","119","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("5");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_02","3","174","119","29",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("6");
            obj.set_text("최소가입나이>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minagev","131","169","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("7");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_03","37","219","80","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("8");
            obj.set_text("최소금액>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minmoneyv","131","219","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("9");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_04","38","273","78","20",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("10");
            obj.set_text("최대금액>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxmoneyv","131","269","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("11");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_05","40","320","79","20",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("12");
            obj.set_text("최소기간>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minperiodv","131","314","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("13");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","40","364","78","20",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("14");
            obj.set_text("최대기간>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxperiodv","131","359","150","40",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("15");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Button("qua_add_btn","226","407","81","27",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("16");
            obj.set_text("등록");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Button("Button01_00","238","483","85","31",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Combo("del_qua_codev","155","484","69","32",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("18");
            obj.set_codecolumn("qua_code");
            obj.set_innerdataset("QualificationList");
            obj.set_text("Combo00");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static01_00","10","481","132","34",null,null,null,null,null,null,this.Tab00.Qualification_tab.form.qua_div.form);
            obj.set_taborder("19");
            obj.set_text("삭제할 자격요건코드>>");
            this.Tab00.Qualification_tab.form.qua_div.addChild(obj.name, obj);

            obj = new Grid("Grid00","356","58","800","508",null,null,null,null,null,null,this.Tab00.Qualification_tab.form);
            obj.set_taborder("1");
            obj.set_border("1px dotted");
            obj.set_binddataset("QualificationList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"qua_code\"/><Cell col=\"1\" text=\"qua_name\"/><Cell col=\"2\" text=\"qua_maxage\"/><Cell col=\"3\" text=\"qua_minage\"/><Cell col=\"4\" text=\"qua_maxmoney\"/><Cell col=\"5\" text=\"qua_minmoney\"/><Cell col=\"6\" text=\"qua_maxperiod\"/><Cell col=\"7\" text=\"qua_minperiod\"/><Cell row=\"1\" text=\"자격요건코드\"/><Cell row=\"1\" col=\"1\" text=\"자격요건명\"/><Cell row=\"1\" col=\"2\" text=\"최대가입나이\"/><Cell row=\"1\" col=\"3\" text=\"최소가입나이\"/><Cell row=\"1\" col=\"4\" text=\"최대금액\"/><Cell row=\"1\" col=\"5\" text=\"최소금액\"/><Cell row=\"1\" col=\"6\" text=\"최대기간\"/><Cell row=\"1\" col=\"7\" text=\"최소기간\"/></Band><Band id=\"body\"><Cell text=\"bind:qua_code\"/><Cell col=\"1\" text=\"bind:qua_name\"/><Cell col=\"2\" text=\"bind:qua_maxage\"/><Cell col=\"3\" text=\"bind:qua_minage\"/><Cell col=\"4\" text=\"bind:qua_maxmoney\"/><Cell col=\"5\" text=\"bind:qua_minmoney\"/><Cell col=\"6\" text=\"bind:qua_maxperiod\"/><Cell col=\"7\" text=\"bind:qua_minperiod\"/></Band></Format></Formats>");
            this.Tab00.Qualification_tab.addChild(obj.name, obj);

            obj = new Button("Button00","358","13","172","38",null,null,null,null,null,null,this.Tab00.Qualification_tab.form);
            obj.set_taborder("2");
            obj.set_text("자격요건 테이블조회하기");
            this.Tab00.Qualification_tab.addChild(obj.name, obj);

            obj = new Tabpage("Saving_tab",this.Tab00);
            obj.set_text("예금");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("SavingGrid","534","30","585","268",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("0");
            obj.set_binddataset("SavingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"sav_code\"/><Cell col=\"1\" text=\"sav_name\"/><Cell col=\"2\" text=\"sav_interestrate\"/><Cell col=\"3\" text=\"sav_online\"/><Cell col=\"4\" text=\"shas_code\"/><Cell col=\"5\" text=\"qua_code\"/><Cell row=\"1\" text=\"예금코드\"/><Cell row=\"1\" col=\"1\" text=\"예금명\"/><Cell row=\"1\" col=\"2\" text=\"금리\"/><Cell row=\"1\" col=\"3\" text=\"온라인가입여부\"/><Cell row=\"1\" col=\"4\" text=\"공유예금코드\"/><Cell row=\"1\" col=\"5\" text=\"자격요건코드\"/></Band><Band id=\"body\"><Cell text=\"bind:sav_code\"/><Cell col=\"1\" text=\"bind:sav_name\"/><Cell col=\"2\" text=\"bind:sav_interestrate\"/><Cell col=\"3\" text=\"bind:sav_online\"/><Cell col=\"4\" text=\"bind:shas_code\"/><Cell col=\"5\" text=\"bind:qua_code\"/></Band></Format></Formats>");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00","57","15","100","25",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("1");
            obj.set_text("예금코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Edit("sav_codev","161","10","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Edit("sav_namev","161","55","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("3");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_00","70","60","71","20",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("4");
            obj.set_text("예금명>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Edit("sav_interestratev","161","102","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("5");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_01","83","110","55","24",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("6");
            obj.set_text("금리>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_02","14","160","124","23",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("7");
            obj.set_text("온라인가입여부>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_03","25","194","123","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("8");
            obj.set_text("공유예금코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_04","25","238","123","28",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("9");
            obj.set_text("자격요건코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Combo("qua_codev","160","237","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("10");
            obj.set_codecolumn("qua_code");
            obj.set_innerdataset("QualificationList");
            obj.set_datacolumn("qua_name");
            obj.set_text("Combo00");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new CheckBox("shas_code_chk","315","156","110","28",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("11");
            obj.set_text("공유여부");
            obj.set_value("");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Combo("shas_codev","160","189","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("12");
            obj.set_innerdataset("Shared_Saving");
            obj.set_codecolumn("shas_code");
            obj.set_text("Combo01");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Div("shas_div","11","324","1170","258",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_border("1px dotted");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Grid("Shared_ChallengeGrid","528","25","397","213",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("0");
            obj.set_binddataset("Shared_Saving");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"shas_code\"/><Cell col=\"1\" text=\"shas_count\"/><Cell col=\"2\" text=\"shas_master\"/><Cell row=\"1\" text=\"공유예금코드\"/><Cell row=\"1\" col=\"1\" text=\"가입인원수\"/><Cell row=\"1\" col=\"2\" text=\"계좌주\"/></Band><Band id=\"body\"><Cell text=\"bind:shas_code\"/><Cell col=\"1\" text=\"bind:shas_count\"/><Cell col=\"2\" text=\"bind:shas_master\"/></Band></Format></Formats>");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Static("asdf","13","30","108","19",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("1");
            obj.set_text("공유예금코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Edit("shas_codev","144","25","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Static("Static00_00","26","75","108","19",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("3");
            obj.set_text("가입인원수>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Edit("shas_countv","144","70","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("4");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Static("Static00_01","56","121","85","29",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("5");
            obj.set_text("계좌주>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Edit("shas_masterv","144","115","150","40",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("6");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Button("shas_add_btn","308","155","90","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("7");
            obj.set_text("등록");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Button("shas_inquire","528","5","113","20",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("8");
            obj.set_text("공유예금테이블조회");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Button("shas_del_btn","308","200","90","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Combo("del_shas_codev","208","200","90","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form.shas_div.form);
            obj.set_taborder("10");
            obj.set_innerdataset("Shared_Saving");
            obj.set_codecolumn("shas_code");
            obj.set_text("Combo00");
            this.Tab00.Saving_tab.form.shas_div.addChild(obj.name, obj);

            obj = new Button("saving_add_btn","321","245","90","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("14");
            obj.set_text("등록");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Button("saving_inquire","535","3","108","21",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("15");
            obj.set_text("예금테이블조회");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Combo("del_saving_codev","222","287","90","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("16");
            obj.set_innerdataset("SavingList");
            obj.set_codecolumn("sav_code");
            obj.set_text("Combo02");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Button("saving_del_Btn","320","285","90","30",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Radio("sav_onlinev","163","149","139","39",null,null,null,null,null,null,this.Tab00.Saving_tab.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Saving_tab_form_sav_onlinev_innerdataset = new nexacro.NormalDataset("Tab00_Saving_tab_form_sav_onlinev_innerdataset", obj);
            Tab00_Saving_tab_form_sav_onlinev_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">온라인가입가능(1)</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">온라인가입불가(0)</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Saving_tab_form_sav_onlinev_innerdataset);
            this.Tab00.Saving_tab.addChild(obj.name, obj);

            obj = new Tabpage("Installment_Saving_tab",this.Tab00);
            obj.set_text("적금");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Installment_SavingGrid","400","34","780","268",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("1");
            obj.set_binddataset("Installment_Saving");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ins_code\"/><Cell col=\"1\" text=\"ins_name\"/><Cell col=\"2\" text=\"ins_online\"/><Cell col=\"3\" text=\"ins_interestrate\"/><Cell col=\"4\" text=\"ins_droprate\"/><Cell col=\"5\" text=\"ins_putmoney\"/><Cell col=\"6\" text=\"ins_term\"/><Cell col=\"7\" text=\"shac_code\"/><Cell col=\"8\" text=\"qua_code\"/><Cell row=\"1\" text=\"적금코드\"/><Cell row=\"1\" col=\"1\" text=\"적금명\"/><Cell row=\"1\" col=\"2\" text=\"온라인가입여부\"/><Cell row=\"1\" col=\"3\" text=\"금리\"/><Cell row=\"1\" col=\"4\" text=\"중도해지이율\"/><Cell row=\"1\" col=\"5\" text=\"선택금액\"/><Cell row=\"1\" col=\"6\" text=\"선택기간\"/><Cell row=\"1\" col=\"7\" text=\"공유적금코드\"/><Cell row=\"1\" col=\"8\" text=\"자격요건코드\"/></Band><Band id=\"body\"><Cell text=\"bind:ins_code\"/><Cell col=\"1\" text=\"bind:ins_name\"/><Cell col=\"2\" text=\"bind:ins_online\"/><Cell col=\"3\" text=\"bind:ins_interestrate\"/><Cell col=\"4\" text=\"bind:ins_droprate\"/><Cell col=\"5\" text=\"bind:ins_putmoney\"/><Cell col=\"6\" text=\"bind:ins_term\"/><Cell col=\"7\" text=\"bind:shac_code\"/><Cell col=\"8\" text=\"bind:qua_code\"/></Band></Format></Formats>");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00","18","11","79","20",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("0");
            obj.set_text("적금코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Edit("ins_codev","109","4","70","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Edit("ins_namev","110","39","70","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("3");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_00","36","46","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("4");
            obj.set_text("적금명>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","81","126","21",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("5");
            obj.set_text("온라인가입>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Edit("ins_interestratev","112","113","70","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("6");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_02","54","120","93","20",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("7");
            obj.set_text("금리>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Edit("ins_dropratev","112","159","70","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("8");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_03","-2","161","113","27",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("9");
            obj.set_text("중도해지이율>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Edit("ins_putmoneyv","113","199","70","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("10");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_04","18","206","84","19",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("11");
            obj.set_text("선택금액>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Edit("ins_termv","300","3","70","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("12");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_05","213","9","87","24",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("13");
            obj.set_text("선택기간>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_06","186","46","117","22",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("14");
            obj.set_text("공유적금코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Static("Static00_07","187","117","142","23",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("15");
            obj.set_text("자격요건코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Button("installment_saving_inquire","407","8","105","22",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("16");
            obj.set_text("적금조회");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Button("installment_saving_add_btn","293","169","100","50",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("17");
            obj.set_text("등록");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Combo("shac_codev","300","45","70","26",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("18");
            obj.set_innerdataset("Shared_Challenge");
            obj.set_codecolumn("shac_code");
            obj.set_text("Combo00");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Combo("ins_qua_codev","299","116","91","26",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("19");
            obj.set_codecolumn("qua_code");
            obj.set_innerdataset("QualificationList");
            obj.set_datacolumn("qua_name");
            obj.set_text("Combo01");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new CheckBox("shac_code_chk","322","74","106","21",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("20");
            obj.set_text("공유여부");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Div("shac_div","20","310","1102","261",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_border("1px dotted");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Grid("Shared_ChallengeGrid","440","40","308","201",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("0");
            obj.set_binddataset("Shared_Challenge");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"shac_code\"/><Cell col=\"1\" text=\"shac_mannum\"/><Cell col=\"2\" text=\"shac_master\"/><Cell row=\"1\" text=\"공유적금코드\"/><Cell row=\"1\" col=\"1\" text=\"가입인원수\"/><Cell row=\"1\" col=\"2\" text=\"계좌주\"/></Band><Band id=\"body\"><Cell text=\"bind:shac_code\"/><Cell col=\"1\" text=\"bind:shac_mannum\"/><Cell col=\"2\" text=\"bind:shac_master\"/></Band></Format></Formats>");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Static("Static00","16","27","116","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("1");
            obj.set_text("공유적금코드>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Edit("shac_codev","141","25","119","35",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Edit("shac_mannumv","141","73","119","35",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("3");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Static("Static00_00","32","78","126","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("4");
            obj.set_text("가입인원수>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Edit("shac_masterv","141","115","119","35",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("5");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Static("Static00_01","64","114","102","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("6");
            obj.set_text("계좌주>>");
            obj.set_font("15px/normal \"Gulim\"");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Button("Shared_challenge_inquire","445","6","209","28",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("7");
            obj.set_text("공유적금조회");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Button("shared_challenge_add_btn","274","134","100","50",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Combo("del_shac_codev","137","217","82","27",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("9");
            obj.set_innerdataset("Shared_Challenge");
            obj.set_codecolumn("shac_code");
            obj.set_text("Combo00");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Button("shac_del_btn","231","214","88","29",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form.shac_div.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.Tab00.Installment_Saving_tab.form.shac_div.addChild(obj.name, obj);

            obj = new Button("int_delete_btn","252","260","91","29",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("22");
            obj.set_text("삭제");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Combo("del_ins_codev","159","261","83","30",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("23");
            obj.set_innerdataset("Installment_Saving");
            obj.set_codecolumn("ins_code");
            obj.set_text("Combo02");
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            obj = new Radio("ins_onlinev","101","71","139","43",null,null,null,null,null,null,this.Tab00.Installment_Saving_tab.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Installment_Saving_tab_form_ins_onlinev_innerdataset = new nexacro.NormalDataset("Tab00_Installment_Saving_tab_form_ins_onlinev_innerdataset", obj);
            Tab00_Installment_Saving_tab_form_ins_onlinev_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">온라인가입(X),0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">온라인가입(O),1</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Installment_Saving_tab_form_ins_onlinev_innerdataset);
            this.Tab00.Installment_Saving_tab.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Account_Product.xfdl", function() {

        //자격요건 리스트 뽑아오기
        this.qua_div_qualification_list = function(obj,e)
        {
        	var id="qualificationlist";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/qualification_list";
        	var reqDs = "";
        	var respDs="QualificationList=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };


        //자격요건 삭제버튼
        this.qua_div_qua_delete_onclick = function(obj,e)
        {
        	var del_qua_codev=this.Tab00.Qualification_tab.form.qua_div.form.del_qua_codev.value
        	var id="qualificationdelete";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/qualification_delete?qua_code="+del_qua_codev;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.qua_div_qualification_list()
        	};

        };
        //자격요건 추가
        this.qua_div_qua_insert_onclick = function(obj,e)
        {

        	var qua_namev=this.Tab00.Qualification_tab.form.qua_div.form.qua_namev.value
        	var qua_maxagev=this.Tab00.Qualification_tab.form.qua_div.form.qua_maxagev.value
        	var qua_minagev=this.Tab00.Qualification_tab.form.qua_div.form.qua_minagev.value
        	var qua_minmoneyv=this.Tab00.Qualification_tab.form.qua_div.form.qua_minmoneyv.value
        	var qua_maxmoneyv=this.Tab00.Qualification_tab.form.qua_div.form.qua_maxmoneyv.value
        	var qua_minperiodv=this.Tab00.Qualification_tab.form.qua_div.form.qua_minperiodv.value
        	var qua_maxperiodv=this.Tab00.Qualification_tab.form.qua_div.form.qua_maxperiodv.value
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_codev.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_namev.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_maxagev.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_minagev.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_minmoneyv.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_maxmoneyv.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_minperiodv.set_value('');
        	this.Tab00.Qualification_tab.form.qua_div.form.qua_maxperiodv.set_value('');



        	var id="qualificationinsert";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/qualification_insert?qua_name="+qua_namev+"&qua_maxage="+qua_maxagev+"&qua_minage="+qua_minagev+"&qua_minmoney="+qua_minmoneyv+"&qua_maxmoney="+qua_maxmoneyv+"&qua_minperiod="+qua_minperiodv+"&qua_maxperiod="+qua_maxperiodv;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.qua_div_qualification_list()
        	};




        };
        //자격요건 수정(추후에 할것)
        this.Tab00_Qualification_qua_div_qua_update_btn_onclick = function(obj,e)
        {
        	up_qua_codev=this.Tab00.Qualification.form.qua_div.form.up_qua_codev.value
        	//this.alert(up_qua_codev)
        	if (up_qua_codev ==null){
        	}else{
        	ds_qua_code=this.Tab00.Qualification.form.Grid00.getr
        	this.alert(ds_qua_code)

        	this.Tab00.Qualification.form.qua_div.form.qua_add_btn.set_text('수정')
        	this.Tab00.Qualification.form.qua_div.form.qua_codev.set_value()

        	}
        };
        //초반로딩
        this.myload = function(obj,e){
        	this.Tab00_onchanged()
        }


        //탭 클릭시 이벤트
        this.Tab00_onchanged = function(obj,e)
        {
        	if(this.Tab00.tabindex == 0){
        		//alert('tab 인덱스 0')
        		this.Tab00_Product_tab_Button01_onclick()
        		this.Tab00.Product_tab.form.ins_codev.set_enable(false)
        		this.Tab00.Product_tab.form.sav_codev.set_enable(false)
        		var radiogaga = this.Tab00.Product_tab.form.product_radio.value
        		if(radiogaga==1){
        		this.Tab00.Product_tab.form.ins_codev.set_enable(true)
        		this.Tab00.Product_tab.form.sav_codev.set_enable(false)
        		}else if(radiogaga==2){
        		this.Tab00.Product_tab.form.ins_codev.set_enable(false)
        		this.Tab00.Product_tab.form.sav_codev.set_enable(true)
        		}
        		this.Tab00_Saving_tab_saving_inquire_onclick()
        		this.Tab00_Installment_Saving_tab_installment_saving_inquire_onclick()
        	}else if(this.Tab00.tabindex == 1){
        		//alert('tab 인덱스 1')
        		this.qua_div_qualification_list()
        	}else if(this.Tab00.tabindex == 2){
        		//alert('tab 인덱스 2')
        		this.Tab00.Saving_tab.form.sav_onlinev.set_value(0)
        		this.Tab00.Saving_tab.form.shas_code_chk.set_value(true)
        		this.Tab00.Saving_tab.form.shas_codev.set_enable(true)
        		this.Tab00_Saving_tab_shas_div_shas_inquire_onclick()
        		this.Tab00_Saving_tab_saving_inquire_onclick()
        		this.qua_div_qualification_list()
        	}else if(this.Tab00.tabindex == 3){
        		//alert('tab 인덱스 3')
        		this.Tab00.Installment_Saving_tab.form.ins_onlinev.set_value(0)
        		this.Tab00.Installment_Saving_tab.form.shac_code_chk.set_value(true)
        		this.Tab00.Installment_Saving_tab.form.shac_codev.set_enable(true)
        		this.Tab00_Installment_Saving_tab_installment_saving_inquire_onclick()
        		this.Tab00_Installment_Saving_tab_Div00_Shared_challenge_inquire_onclick()
        		this.qua_div_qualification_list()
        	}

        };
        //공유예금계좌 체크박스 이벤트
        this.Tab00_Saving_tab_shas_code_chk_onclick = function(obj,e)
        {
        	var shas_code_chk = this.Tab00.Saving_tab.form.shas_code_chk.isChecked()
        	if (shas_code_chk){
        		this.Tab00.Saving_tab.form.shas_codev.set_enable(true)
        	}else{
        		this.Tab00.Saving_tab.form.shas_codev.set_enable(false)
        		this.Tab00.Saving_tab.form.shas_codev.set_value('-1')
        	}
        };

        //예금리스트 가져오기
        this.Tab00_Saving_tab_saving_inquire_onclick = function(obj,e)
        {
        	//var sav_onlinev = this.Tab00.Saving_tab.form.sav_onlinev.value
        	//var sav_test = this.Tab00.Saving_tab.form.shas_codev.value
        	//alert(sav_test)
        	var id="savinglist";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/saving_list";
        	var reqDs = "";
        	var respDs="SavingList=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };
        //예금 등록
        this.Tab00_Saving_tab_saving_add_btn_onclick = function(obj,e)
        {
        	var sav_namev=this.Tab00.Saving_tab.form.sav_namev.value
        	var sav_interestratev=this.Tab00.Saving_tab.form.sav_interestratev.value
        	var sav_onlinev=this.Tab00.Saving_tab.form.sav_onlinev.value
        	var shas_codev=this.Tab00.Saving_tab.form.shas_codev.value
        	var qua_codev=this.Tab00.Saving_tab.form.qua_codev.value

        	this.Tab00.Saving_tab.form.sav_namev.set_value('');
        	this.Tab00.Saving_tab.form.sav_interestratev.set_value('');

        	var id="saving_insert";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/saving_insert?sav_name="+sav_namev+"&sav_interestrate="+sav_interestratev+"&sav_online="+sav_onlinev+"&shas_code="+shas_codev+"&qua_code="+qua_codev;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Saving_tab_saving_inquire_onclick();
        	};
        };
        //예금삭제
        this.Tab00_Saving_tab_saving_del_Btn_onclick = function(obj,e)
        {
        	var del_saving_codev = this.Tab00.Saving_tab.form.del_saving_codev.value
        	var id="saving_delete";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/saving_delete?sav_code="+del_saving_codev;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Saving_tab_saving_inquire_onclick();
        	};
        };

        //공유예금 리스트 가져오기
        this.Tab00_Saving_tab_shas_div_shas_inquire_onclick = function(obj,e)
        {
        	var id="shared_savinglist";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/shared_saving_list";
        	var reqDs = "";
        	var respDs="Shared_Saving=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };
        //공유예금 추가
        this.Tab00_Saving_tab_shas_div_shas_add_btn_onclick = function(obj,e)
        {
        	var shas_countv=this.Tab00.Saving_tab.form.shas_div.form.shas_countv.value
        	var shas_masterv=this.Tab00.Saving_tab.form.shas_div.form.shas_masterv.value


        	this.Tab00.Saving_tab.form.shas_div.form.shas_countv.set_value('');
        	this.Tab00.Saving_tab.form.shas_div.form.shas_masterv.set_value('');



        	var id="shared_saving_insert";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/shared_saving_insert?shas_count="+shas_countv+"&shas_master="+shas_masterv;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Saving_tab_shas_div_shas_inquire_onclick();
        	};
        };
        //공유예금 삭제
        this.Tab00_Saving_tab_shas_div_shas_del_btn_onclick = function(obj,e)
        {
        	var del_shas_codev = this.Tab00.Saving_tab.form.shas_div.form.del_shas_codev.value;

        	var id="shared_saving_delete";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/shared_saving_delete?shas_code="+del_shas_codev;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Saving_tab_shas_div_shas_inquire_onclick()
        	};
        };




        //적금 공유 체크박스 이벤트
        this.Tab00_Installment_Saving_tab_shac_code_chk_onclick = function(obj,e)
        {
        	var shac_code_chk = this.Tab00.Installment_Saving_tab.form.shac_code_chk.isChecked()
        	if (shac_code_chk){
        		this.Tab00.Installment_Saving_tab.form.shac_codev.set_enable(true)
        	}else{
        		this.Tab00.Installment_Saving_tab.form.shac_codev.set_enable(false)
        		this.Tab00.Installment_Saving_tab.form.shac_codev.set_value('-1')
        	}
        };
        //공유적금리스트
        this.Tab00_Installment_Saving_tab_Div00_Shared_challenge_inquire_onclick = function(obj,e)
        {
        	var id="shared_challengelist";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/shared_challenge_list";
        	var reqDs = "";
        	var respDs="Shared_Challenge=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };
        //공유적금 추가
        this.Tab00_Installment_Saving_tab_Div00_shared_challenge_add_btn_onclick = function(obj,e)
        {
        	var shac_mannumv=this.Tab00.Installment_Saving_tab.form.shac_div.form.shac_mannumv.value
        	var shac_masterv=this.Tab00.Installment_Saving_tab.form.shac_div.form.shac_masterv.value


        	this.Tab00.Installment_Saving_tab.form.shac_div.form.shac_mannumv.set_value('')
        	this.Tab00.Installment_Saving_tab.form.shac_div.form.shac_masterv.set_value('')
        	var id="shared_challenge_insert";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/shared_challenge_insert?shac_mannum="+shac_mannumv+"&shac_master="+shac_masterv;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Installment_Saving_tab_Div00_Shared_challenge_inquire_onclick()
        	};
        };
        //공유적금삭제
        this.Tab00_Installment_Saving_tab_shac_div_shac_del_btn_onclick = function(obj,e)
        {
        	var del_shac_codev = this.Tab00.Installment_Saving_tab.form.shac_div.form.del_shac_codev.value
        	var id="shared_challenge_delete";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/shared_challenge_delete?shac_code="+del_shac_codev;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Installment_Saving_tab_Div00_Shared_challenge_inquire_onclick()
        	};
        };
        //적금 리스트
        this.Tab00_Installment_Saving_tab_installment_saving_inquire_onclick = function(obj,e)
        {
        	var id="installment_saving_list";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/installment_saving_list";
        	var reqDs = "";
        	var respDs="Installment_Saving=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};


        };
        //적금 추가
        this.Tab00_Installment_Saving_tab_installment_saving_add_btn_onclick = function(obj,e)
        {
        	var ins_namev = this.Tab00.Installment_Saving_tab.form.ins_namev.value
        	var ins_onlinev= this.Tab00.Installment_Saving_tab.form.ins_onlinev.value
        	var ins_interestratev= this.Tab00.Installment_Saving_tab.form.ins_interestratev.value
        	var ins_dropratev= this.Tab00.Installment_Saving_tab.form.ins_dropratev.value
        	var ins_putmoneyv= this.Tab00.Installment_Saving_tab.form.ins_putmoneyv.value
        	var ins_termv= this.Tab00.Installment_Saving_tab.form.ins_termv.value
        	var shac_codev= this.Tab00.Installment_Saving_tab.form.shac_codev.value
        	var ins_qua_codev= this.Tab00.Installment_Saving_tab.form.ins_qua_codev.value

        	this.Tab00.Installment_Saving_tab.form.ins_namev.set_value('')

        	this.Tab00.Installment_Saving_tab.form.ins_interestratev.set_value('')
        	this.Tab00.Installment_Saving_tab.form.ins_dropratev.set_value('')
        	this.Tab00.Installment_Saving_tab.form.ins_putmoneyv.set_value('')
        	this.Tab00.Installment_Saving_tab.form.ins_termv.set_value('')


        	var id="installment_saving_insert";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/installment_saving_insert?ins_name="+ins_namev+"&ins_online="+ins_onlinev+"&ins_interestrate="+ins_interestratev+"&ins_droprate="+ins_dropratev+"&ins_putmoney="+ins_putmoneyv+"&ins_term="+ins_termv+"&shac_code="+shac_codev+"&qua_code="+ins_qua_codev;
        	var reqDs = "";
        	var respDs="";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Installment_Saving_tab_installment_saving_inquire_onclick()
        	};
        };
        //적금삭제
        this.Tab00_Installment_Saving_tab_int_delete_btn_onclick = function(obj,e)
        {
        	var del_ins_codev = this.Tab00.Installment_Saving_tab.form.del_ins_codev.value
        	var id="installment_saving_delete";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/installment_saving_delete?ins_code="+del_ins_codev;
        	var reqDs = "";
        	var respDs="";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Installment_Saving_tab_installment_saving_inquire_onclick()
        	};
        };


        //프로덕트 Radiogaga
        this.Tab00_Product_tab_Radio00_onitemchanged = function(obj,e)
        {
        	var radiogaga = this.Tab00.Product_tab.form.product_radio.value
        	if(radiogaga==1){
        		this.Tab00.Product_tab.form.ins_codev.set_enable(true)
        		this.Tab00.Product_tab.form.sav_codev.set_enable(false)
        		this.Tab00.Product_tab.form.sav_codev.set_value('-1')
        	}else if(radiogaga==2){
        		this.Tab00.Product_tab.form.sav_codev.set_enable(true)
        		this.Tab00.Product_tab.form.ins_codev.set_enable(false)
        		this.Tab00.Product_tab.form.ins_codev.set_value('-1')

        	}
        	//this.alert(radiogaga)
        };




        //프로덕트 리스트
        this.Tab00_Product_tab_Button01_onclick = function(obj,e)
        {
        	var id="product_list";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/product_list";
        	var reqDs = "";
        	var respDs="ProductList=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };
        //프로덕트 삭제
        this.Tab00_Product_tab_Button02_onclick = function(obj,e)
        {
        	var del_pro_codev = this.Tab00.Product_tab.form.del_pro_codev.value
        	var id="product_delete";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/product_delete?pro_code="+del_pro_codev;
        	var reqDs = "";
        	var respDs="";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Product_tab_Button01_onclick()
        	};

        };
        //프로덕트 추가
        this.Tab00_Product_tab_Button00_onclick = function(obj,e)
        {


        	//var pro_codev = this.Tab00.Product_tab.form.pro_codev.value
        	var sav_codev = this.Tab00.Product_tab.form.sav_codev.value
        	var ins_codev = this.Tab00.Product_tab.form.ins_codev.value

        	//this.Tab00.Product_tab.form.pro_codev.set_value('')
        	//this.Tab00.Product_tab.form.sav_codev.set_value('')
        	//this.Tab00.Product_tab.form.ins_codev.set_value('')
        	//this.alert(sav_codev+","+ins_codev)


        	var id="product_insert";
        	var url = "http://192.168.0.122:8080/hy_HD_admin_spring/product_insert?ins_code="+ins_codev+"&sav_code="+sav_codev;
        	var reqDs = "";
        	var respDs="";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		this.Tab00_Product_tab_Button01_onclick()
        	};

        };

        this.Tab00_Qualification_tab_qua_div_sdf_onclick = function(obj,e)
        {

        };

        this.Tab00_Installment_Saving_tab_ins_onlinev_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Product_tab.form.Static00.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Product_tab.form.pro_codev.addEventHandler("onchanged",this.Tab00_Product_tab_pro_codev_onchanged,this);
            this.Tab00.Product_tab.form.Static00_00.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Product_tab.form.Static00_01.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Product_tab.form.Button00.addEventHandler("onclick",this.Tab00_Product_tab_Button00_onclick,this);
            this.Tab00.Product_tab.form.Button01.addEventHandler("onclick",this.Tab00_Product_tab_Button01_onclick,this);
            this.Tab00.Product_tab.form.product_radio.addEventHandler("onitemchanged",this.Tab00_Product_tab_Radio00_onitemchanged,this);
            this.Tab00.Product_tab.form.Button02.addEventHandler("onclick",this.Tab00_Product_tab_Button02_onclick,this);
            this.Tab00.Product_tab.form.Static00_01_00.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Qualification_tab.form.qua_div.form.sdf.addEventHandler("onclick",this.Tab00_Qualification_tab_qua_div_sdf_onclick,this);
            this.Tab00.Qualification_tab.form.qua_div.form.qua_add_btn.addEventHandler("onclick",this.qua_div_qua_insert_onclick,this);
            this.Tab00.Qualification_tab.form.qua_div.form.Button01_00.addEventHandler("onclick",this.qua_div_qua_delete_onclick,this);
            this.Tab00.Qualification_tab.form.Button00.addEventHandler("onclick",this.qua_div_qualification_list,this);
            this.Tab00.Saving_tab.form.shas_code_chk.addEventHandler("onclick",this.Tab00_Saving_tab_shas_code_chk_onclick,this);
            this.Tab00.Saving_tab.form.shas_div.form.shas_add_btn.addEventHandler("onclick",this.Tab00_Saving_tab_shas_div_shas_add_btn_onclick,this);
            this.Tab00.Saving_tab.form.shas_div.form.shas_inquire.addEventHandler("onclick",this.Tab00_Saving_tab_shas_div_shas_inquire_onclick,this);
            this.Tab00.Saving_tab.form.shas_div.form.shas_del_btn.addEventHandler("onclick",this.Tab00_Saving_tab_shas_div_shas_del_btn_onclick,this);
            this.Tab00.Saving_tab.form.saving_add_btn.addEventHandler("onclick",this.Tab00_Saving_tab_saving_add_btn_onclick,this);
            this.Tab00.Saving_tab.form.saving_inquire.addEventHandler("onclick",this.Tab00_Saving_tab_saving_inquire_onclick,this);
            this.Tab00.Saving_tab.form.saving_del_Btn.addEventHandler("onclick",this.Tab00_Saving_tab_saving_del_Btn_onclick,this);
            this.Tab00.Saving_tab.form.sav_onlinev.addEventHandler("onitemchanged",this.Tab00_Saving_tab_Radio00_onitemchanged,this);
            this.Tab00.Installment_Saving_tab.form.installment_saving_inquire.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_installment_saving_inquire_onclick,this);
            this.Tab00.Installment_Saving_tab.form.installment_saving_add_btn.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_installment_saving_add_btn_onclick,this);
            this.Tab00.Installment_Saving_tab.form.shac_code_chk.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_shac_code_chk_onclick,this);
            this.Tab00.Installment_Saving_tab.form.shac_div.form.Shared_challenge_inquire.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_Div00_Shared_challenge_inquire_onclick,this);
            this.Tab00.Installment_Saving_tab.form.shac_div.form.shared_challenge_add_btn.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_Div00_shared_challenge_add_btn_onclick,this);
            this.Tab00.Installment_Saving_tab.form.shac_div.form.shac_del_btn.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_shac_div_shac_del_btn_onclick,this);
            this.Tab00.Installment_Saving_tab.form.int_delete_btn.addEventHandler("onclick",this.Tab00_Installment_Saving_tab_int_delete_btn_onclick,this);
            this.Tab00.Installment_Saving_tab.form.ins_onlinev.addEventHandler("onitemchanged",this.Tab00_Installment_Saving_tab_ins_onlinev_onitemchanged,this);
        };

        this.loadIncludeScript("Account_Product.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
