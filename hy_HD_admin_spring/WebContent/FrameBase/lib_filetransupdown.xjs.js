//XJS=lib_filetransupdown.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  techtip file transfer upload download sample library
        *  @MenuPath   	lib_techtip>  lib_filetransupdown.xjs
        *  @FileName	lib_filetransupdown.xjs
        *  @Desction	file transfer upload download
        *******************************************************************************
        *  2020.07.16		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define config object
        * @param objForm : objForm,
        *		 objConfig : {	objUpTrans	: this.fileUpTrans,
        						objDownTrans: this.fileDownTrans,
        						objDialog 	: this.fileDialog,
        						objProgId	: "ProgressBar00",
        						dsUploadId	: "dsUpload",
        						dsDownloadId: "dsDownload",
        						sFolerName	: this.folderName,
        						sSaveUrl	: this.saveUrl,
        						sUploadUrl	: "fileUpload_postdatatest.jsp?filefolder=",
        						sDownloadSingleUrl	: "fileDownload_postdatatest.jsp",
        						sDownloadMultiUrl	: "fileDownload_postdatatestAll.jsp"
        * @return
        */
        this.gfnFileTransUpDownFormLoad = function (objForm,objConfig)
        {
        	//add event handler
        	objConfig.objUpTrans.addEventHandler("onsuccess", this.fileUpTrans_onsuccess, this);
        	objConfig.objUpTrans.addEventHandler("onerror", this.fileUpTrans_onerror, this);
        	objConfig.objUpTrans.addEventHandler("onprogress", this.fileUpTrans_onprogress, this);

        	objConfig.objDownTrans.addEventHandler("onsuccess", this.fileDownTrans_onsuccess, this);
        	objConfig.objDownTrans.addEventHandler("onerror", this.fileDownTrans_onerror, this);

        	objConfig.objDialog.addEventHandler("onclose", this.fileDialog_onclose, this);

        	objConfig.objUpTrans.datasetId = objConfig.dsUploadId;
        	objConfig.objDownTrans.datasetId = objConfig.dsDownloadId;

        	//object connected
        	objForm.config = objConfig;
        };

        /**
        * @description file size calculate
        * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        * @param nFileSize
        * @return
        */
        this.gfnCutFileSize = function(nFileSize)
        {
        	var sOutput = nFileSize + " bytes";
        	var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        	var nApprox = nFileSize / 1024;

        	for (var nMultiple = 0; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}

        	return sOutput;
        };

        /**
        * @description get percentage
        * @param nload, nTotal ( nload/nTotal ) X 100
        * @return
        */
        this.gfnGetPercent = function(nload,nTotal)
        {
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };

        /**
        * @description close file dialog and grip ondrop --> add row file list (dataset)
        * @param filelists : add file list(virture file),
                 objForm : form
        * @return
        */
        this.gfnAddFileList = function(filelists, objForm)
        {
        	var objFileUpTrans = objForm.config.objUpTrans;

        	//array type virtualfile List
        	var vFile;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++)
        	{
        		vFile = filelists[i];
        		objFileUpTrans.addFile(vFile.name,vFile);
        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);
        		vFile.datasetId = objFileUpTrans.datasetId;
        		vFile.open(null, VirtualFile.openRead);
        		//return file size --> fileList_onsuccess : reason 9
        		vFile.getFileSize();
        		vFile.close();
        	}
        }

        /**
        * @description add dataset virture file list
        * @param objVirtureFile : VirtureFile
        *        e : EventInfo
        * 1.this.gfnAddFileList -> 2.vFile.getFileSize()
           -> 3. fileList_onsuccess : reason 9 -> 4. this.gfnAddUploadRow
        * @return
        */
        this.gfnAddUploadRow = function (objVirtureFile,e)
        {
        	var objDs = this.objects[objVirtureFile.datasetId];
        	var objParent = objDs.parent;
        	var objProgress = this.components[objParent.config.objProgId];
        	var nRowIdx = objDs.addRow();
        	objDs.setColumn(nRowIdx, "FILE_NAME", objVirtureFile.filename);
        	objDs.setColumn(nRowIdx, "FiLE_SIZE", this.gfnCutFileSize(e.filesize));
        	//file local path --> only nexacro runtime environment
        	objDs.setColumn(nRowIdx, "FILE_PATH", objVirtureFile.fullpath);
        	objDs.setColumn(nRowIdx, "FILE_ID",	  objVirtureFile.id);

        	//progressbar status
        	if(objProgress.pos > 0)
        	{
        		objProgress.set_pos(0);
        	}
        };

        /**
        * @description save file on server
        * @param objForm
        * @return
        */
        this.gfnUploadfile = function(objForm)
        {
        	var objFileUpTrans = objForm.config.objUpTrans;
        	var sFolderName = objForm.config.sFolerName;
        	var sUrl = objForm.config.sSaveUrl;
        	var sUploadUrl = objForm.config.sUploadUrl;

        	//file upload excute
        	objFileUpTrans.upload(sUrl + sUploadUrl + sFolderName);
        }

        /**
        * @description single download
        * @param nRow : clicked row
        *        objForm
        * @return
        */
        this.gfnSingleDownloadFile = function (nRow, objForm)
        {
        	var objFileDownTrans = objForm.config.objDownTrans;

        	var objDs = objForm.objects[objFileDownTrans.datasetId];
        	objFileDownTrans.clearPostDataList();

        	var sFolderName = objForm.config.sFolerName;

        	//only nexacro runtime environment property
        	objFileDownTrans.set_downloadfilename(objDs.getColumn(nRow, "FILE_NAME"));

        	//set filedownload option
        	objFileDownTrans.setPostData(
        		"filepath",
        		objDs.getColumn(nRow, "FILE_URL")
        	);
        	objFileDownTrans.setPostData(
        		"filename",
        		objDs.getColumn(nRow, "FILE_NAME")
        	);
        	objFileDownTrans.setPostData(
        		"filefolder",
        		sFolderName
        	);

        	var sUrl = objForm.config.sSaveUrl;
        	var sSingleUrl = objForm.config.sDownloadSingleUrl;

        	//download excute
        	objFileDownTrans.download(sUrl+sSingleUrl);
        }

        /**
        * @description multi download --> zip file
        * @param objForm
        * @return
        */
        this.gfnMultiDownloadFiles = function(objForm)
        {
        	var objFileDownTrans = objForm.config.objDownTrans;
        	objFileDownTrans.clearPostDataList();

        	var objDs = objForm.objects[objFileDownTrans.datasetId];
        	var arrNameList = new Array();

        	//request.getParameter("filefolder");
        	var sFolderName = objForm.config.sFolerName;

        	for(var i=0; i<objDs.getRowCount(); i++)
        	{
        		//String object (server) --> request.getParameter("filenamelist");
        		arrNameList[i] = objDs.getColumn(i, "FILE_NAME");
        	}

        	//only nexacro runtime environment property
        	objFileDownTrans.set_downloadfilename(sFolderName+".zip");

        	objFileDownTrans.setPostData(
        		"filefolder",
        		sFolderName
        	);
        	objFileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	var sUrl = objForm.config.sSaveUrl;
        	var sMultiUrl = objForm.config.sDownloadMultiUrl;

        	//download excute
        	objFileDownTrans.download(sUrl+sMultiUrl);
        }
        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description FileDialog onclose event --> fileDialog_onclose
        */
        this.fileDialog_onclose = function(obj,e)
        {
        	var objParent = obj.parent;
        	var objFileupTransFer = objParent.config.objUpTrans;
        	if(this.gfnIsNull(e.virtualfiles))
        	{
        		return;
        	}

        	//add row file list
        	this.gfnAddFileList(e.virtualfiles, objParent);
        };

        /**
         * @description VirtualFile onsuccess event --> fileList_onsuccess
        */
        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		//add dataset virture file list
        		this.gfnAddUploadRow(obj,e);
        	}
        };

        /**
         * @description VirtualFile onerror event --> fileList_onerror
        */
        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        };

        /**
         * @description FileUpTransfer onprogress event --> fileUpTrans_onprogress
        */
        this.fileUpTrans_onprogress = function(obj,e)
        {
        	var objParent = obj.parent;
        	var objProgress = this.components[objParent.config.objProgId];

        	//get percentage
        	var rtnPercent = this.gfnGetPercent(e.loaded,e.total);
        		objProgress.set_pos(rtnPercent);
        };

        /**
         * @description FileUpTransfer onsuccess event --> fileUpTrans_onsuccess
        */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objForm = obj.parent;
        	//objCallDs == upload dataset ( upload file list )
        	//objDs == grid dataset ( grid list )
        	var objCallDs = e.datasets[0];
        	var objDs = this.objects[objForm.config.dsListId];

        	var sFileId = "";
        	var sFilename = "";
        	var sOrgFilename = "";


        	var nCallDsRow = 0;

        	for(var i=0; i<objDs.getRowCount(); i++)
        	{
        		if(this.gfnIsNull(objDs.getColumn(i,"FILE_URL")))
        		{
        			//virtureFile id
        			sFileId = objDs.getColumn(i,"FILE_ID");
        			sOrgFilename = objDs.getColumn(i,"FILE_NAME");

        			//virtureFile (upload list) remove
        			obj.removeFile(sFileId);

        			nCallDsRow = objCallDs.findRow("orgFileName",sOrgFilename);
        			objDs.setColumn(i,"FILE_PATH",objCallDs.getColumn(nCallDsRow,"savePath"));
        			objDs.setColumn(i,"FILE_URL",objCallDs.getColumn(nCallDsRow,"fullUrl"));
        		}
        	};
        };

        /**
         * @description FileUpTransfer onerror event --> fileUpTrans_onerror
        */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        /**
         * @description FileDownTransfer onsuccess event --> fileDownTrans_onsuccess
        */
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        /**
         * @description FileDownTransfer onerror event --> fileDownTrans_onerror
        */
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
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
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
