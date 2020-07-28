(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileupdown");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAdd","25","31","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","100","31","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","28","71","791","201",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","173","31","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전송");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","28","325","791","201",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_nodatatext("폴더를 지정하여 파일 리스트를 불러옵니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload","719","287","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","28","287","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("리스트 불러오기");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","619","31","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fileupdown_form.xfdl", function() {
        /* service url : 사용경로 지정 */
        this.saveUrl = "http://localhost:8080/hy_HD_admin_spring/service/";
        this.folderName = "fileSample";	//file directory

        this.fullFilesize = 0;
        //추가
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        //삭제
        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var nRow = this.dsUpload.rowposition;
        	var sFileid = this.dsUpload.getColumn(nRow,"FILE_ID");
        	this.dsUpload.deleteRow(nRow);

        	this.fileUpTrans.removeFile(sFileid);			//filelist remove
        };

        //저장
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.uploadfile();
        };

        //리스트 불러오기
        this.btnSearch_onclick = function(obj,e)
        {
        	//search attach file list
        	this.transaction("list", this.saveUrl + "fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "callback_transaction", "false", "0")
        };

        //전체 다운로드
        this.btnDonwload_onclick = function(obj,e)
        {
        	this.downloadfileAll();
        };

        //upload Grid oncelldbclick
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	//단건 처리 필요 시 추가구현 : playnexacro 참조
        };

        //upload Grid ondrop
        this.Grid00_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };

        //download Grid oncelldbclick
        this.Grid01_oncelldblclick = function(obj,e)
        {
        	this.downloadfile(e.row);
        };

        this.callback_transaction = function(svcId, errCode, errMsg)
        {
        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);
        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.cutFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}
        		this.dsDownload.set_enableevent(true);
        	}
        };

        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfnIsNull(e.virtualfiles))
        	{
        		return;
        	}

        	this.addFileList(e.virtualfiles);
        };

        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.cutFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_URL",  obj.fullpath);
        		this.dsUpload.setColumn(nRowIdx, "FILE_ID",	  obj.name);

        		//this.fullFilesize += e.filesize;

        		if(this.ProgressBar00.pos > 0)
        		{
        			this.ProgressBar00.set_pos(0);
        		}
        	}
        }

        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        this.fileUpTrans_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded,e.total);

        	this.ProgressBar00.set_pos(rtnPercent);
        };

        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	var sFileid = "";
        	for(var i=0; i<objCallDs.getRowCount(); i++)
        	{
        		sFileid = this.dsUpload.getColumn(i,"FILE_ID");
        		this.fileUpTrans.removeFile(sFileid);			//filelist remove

        		this.dsUpload.setColumn(i,"FILE_URL",objCallDs.getColumn(i,"savePath"));
        		this.dsUpload.setColumn(i,"FILE_ID", "");
        	}

        	alert("전송완료");
        };

        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };

        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        this.addFileList = function(filelists)
        {
        	//array type virtualfile List
        	var vFile;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++)
        	{
        		vFile = filelists[i];
        		this.fileUpTrans.addFile(vFile.name,vFile);

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size
        		vFile.close();
        	}
        }

        this.uploadfile = function()
        {
        	//file upload
        	this.fileUpTrans.upload(this.saveUrl +"fileUpload_postdatatest.jsp?filefolder="+this.folderName);
        }

        this.downloadfile = function(i)
        {
        	this.fileDownTrans.clearPostDataList();

        	this.fileDownTrans.set_downloadfilename(this.dsDownload.getColumn(i, "FILE_NAME"));	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filepath",
        		this.dsDownload.getColumn(i, "FILE_URL")
        	);
        	this.fileDownTrans.setPostData(
        		"filename",
        		this.dsDownload.getColumn(i, "FILE_NAME")
        	);
        	this.fileDownTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);

        	this.fileDownTrans.download(this.saveUrl+"fileDownload_postdatatest.jsp");
        }

        this.downloadfileAll = function()
        {
        	this.fileDownTrans.clearPostDataList();

        	var arrNameList = new Array();
        	for(var i=0; i<this.dsDownload.getRowCount(); i++)
        	{
        		//fileDownload_postdatatestAll.jsp -> request.getParameter("filenamelist");
        		arrNameList[i] = this.dsDownload.getColumn(i, "FILE_NAME");
        	}

        	this.fileDownTrans.set_downloadfilename("fileSample.zip");	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);
        	this.fileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	this.fileDownTrans.download(this.saveUrl+"fileDownload_postdatatestAll.jsp");
        }

        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };

        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };

        this.loadIncludeScript("fileupdown_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
