// Garden Gnome Software - Skin
// Pano2VR 7.1.6/20966
// Filename: ASM_Proje.ggsk
// Generated 2025-02-09T21:54:50

function pano2vrSkin(player,base) {
	player.addVariable('asm_compass', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_show_plan', 2, false, { ignoreInState: 0  });
	player.addVariable('asm_show_open', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('asm_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('asm_opt_3d_preview', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_image_popup') == false)) && 
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_video_youtube_popup', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == false)) && 
				((player.getVariableValue('vis_video_vimeo_popup', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == false)) && 
				((player.getVariableValue('vis_video_file_popup') == false)) && 
				((player.getVariableValue('vis_video_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		el=me._asm_info=document.createElement('div');
		el.ggId="asm_\u0130nfo";
		el.ggDx=10;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((250px + 2px) / 2) + 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 2px) / 2) + 9px);';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._asm_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('asm_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._asm_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._asm_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._asm_info.style.transition='';
				if (me._asm_info.ggCurrentLogicStateVisible == 0) {
					me._asm_info.style.visibility=(Number(me._asm_info.style.opacity)>0||!me._asm_info.style.opacity)?'inherit':'hidden';
					me._asm_info.ggVisible=true;
				}
				else {
					me._asm_info.style.visibility="hidden";
					me._asm_info.ggVisible=false;
				}
			}
		}
		me._asm_info.logicBlock_visible();
		me._asm_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_=document.createElement('div');
		els=me._info___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u0130nfo_";
		el.ggDx=1;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 163px;';
		hs+='left : calc(50% - ((236px + 2px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((163px + 2px) / 2) + 38px);';
		hs+='visibility : inherit;';
		hs+='width : 236px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Ekran\u0131n \xfczerine sol fare tu\u015fuyla t\u0131klay\u0131p s\xfcr\xfckleyerek 360 \xb0 panoraman\u0131n tamam\u0131n\u0131 g\xf6rebilirsiniz. Bir sonraki panaromay\u0131 a\xe7mak i\xe7in ekrandaki oklar\u0131 t\u0131klay\u0131n.Panoromalar aras\u0131 gezinirken etkile\u015fimli noktalar \tile m\xfcze hakk\u0131nda bilgiler edinebilirsiniz.<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_.ggUpdateText();
		el.appendChild(els);
		me._info_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_.ggUpdatePosition=function (useTransition) {
		}
		el=me._asm_mouse=document.createElement('div');
		els=me._asm_mouse__img=document.createElement('img');
		els.className='ggskin ggskin_asm_mouse';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="asm_mouse";
		el.ggDy=53;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 47px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((47px + 0px) / 2) + 53px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_mouse.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._asm_mouse.ggUpdatePosition=function (useTransition) {
		}
		me._info_.appendChild(me._asm_mouse);
		me._asm_info.appendChild(me._info_);
		el=me._asm_muze_resim=document.createElement('div');
		els=me._asm_muze_resim__img=document.createElement('img');
		els.className='ggskin ggskin_asm_muze_resim';
		hs=basePath + 'images/asm_muze_resim.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="asm_muze_resim";
		el.ggDx=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 10px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_muze_resim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._asm_muze_resim.onclick=function (e) {
			player.openUrl("https:\/\/www.aksaray.bel.tr\/","_blank");
		}
		me._asm_muze_resim.ggUpdatePosition=function (useTransition) {
		}
		me._asm_info.appendChild(me._asm_muze_resim);
		me.divSkin.appendChild(me._asm_info);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoMToxLjIuMisyMDIyMTIwNTE1NTArYjBhODQ4NjU0MSkiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiBpZD0ic3ZnOTcyNCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIGhlaWdodD'+
			'0iNjAwIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbWU9ImFkZC1pbmZvLnN2ZyIgd2lkdGg9IjYwMCIgdmVyc2lvbj0iMS4xIj4KIDxkZWZzIGlkPSJkZWZzOTcyOCIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA4MCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaWQ9Im5hbWVkdmlldzk3MjYiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9'+
			'IjAiIGlua3NjYXBlOnpvb209IjAuNTk0ODA4NTUiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDkiIGlua3NjYXBlOmN4PSI3OC4xNzY0MTUiIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlua3NjYXBlOndpbmRvdy14PSIwIiBzaG93Z3VpZGVzPSJ0cnVlIiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzk3MjQiIGlua3NjYXBlOmN5PSI0ODMuMzQ4OCIgaW5rc2NhcGU6d2luZG93LW'+
			'1heGltaXplZD0iMSI+CiAgPGlua3NjYXBlOmdyaWQgb3JpZ2lueD0iMCIgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDk5NzIiIG9yaWdpbnk9IjAiLz4KICA8c29kaXBvZGk6Z3VpZGUgb3JpZW50YXRpb249IjEsMCIgaW5rc2NhcGU6bG9ja2VkPSJmYWxzZSIgcG9zaXRpb249IjMwMCwzNjAiIGlkPSJndWlkZTEyMDgiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojNTVhYWZmO3N0cm9rZS1saW5lY2FwOnJvdW5kOy1pbmtzY2FwZS1zdHJva2U6bm9uZTsgZmlsbC1vcGFjaXR5OjEiIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3NzcyIgZD0i'+
			'bSAzMDAsMjM0IGMgLTIyLjA5MTM5LDAgLTQwLDE3LjkwODYxIC00MCw0MCB2IDE3MCBjIDAsMjIuMDkxMzkgMTcuOTA4NjEsNDAgNDAsNDAgMjIuMDkxMzksMCA0MCwtMTcuOTA4NjEgNDAsLTQwIFYgMjc0IGMgMCwtMjIuMDkxMzkgLTE3LjkwODYxLC00MCAtNDAsLTQwIHoiIGlkPSJwYXRoMTIxMCIvPgogPHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDoxLjA1MTAzO2NvbG9yOiMwMDAwMDA7ZmlsbDojNTVhYWZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDstaW5rc2NhcGUtc3Ryb2tlOm5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VyczsgZmlsbC'+
			'1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTUxNzMyMDUsMCwwLDAuOTUxMTU3ODcsMTMuOTAxMTc0LDEyLjE2ODc5NCkiIGQ9Im0gMzAwLjYwOTM3LC0xMi43OTI5NjkgYyAtMTczLjYwNTk5LDAgLTMxNS4yMTQ4MzksMTQxLjcyNDgzOSAtMzE1LjIxNDgzOSwzMTUuNDA0Mjk5IDAsMTczLjY3OTQ1IDE0MS42MDg4NDksMzE1LjQwNDI5IDMxNS4yMTQ4MzksMzE1LjQwNDI5IDE3My42MDYsMCAzMTUuMjE0ODUsLTE0MS43MjQ4NCAzMTUuMjE0ODUsLTMxNS40MDQyOSAwLC0xNzMuNjc5NDYgLTE0MS42MDg4NSwtMzE1LjQwNDI5OSAtMzE1LjIxNDg1LC0zMTUuNDA0Mjk5IHogbSAwLDg0'+
			'LjA4MjAzMSBjIDEyOC4xMzI3OCwxMGUtNyAyMzEuMTMwODYsMTAzLjA1MjczOCAyMzEuMTMwODYsMjMxLjMyMjI2OCAwLDEyOC4yNjk1MiAtMTAyLjk5ODA4LDIzMS4zMjIyNiAtMjMxLjEzMDg2LDIzMS4zMjIyNiBDIDE3Mi40NzY2LDUzMy45MzM1OSA2OS40NzY1NjIsNDMwLjg4MDg1IDY5LjQ3NjU2MiwzMDIuNjExMzMgNjkuNDc2NTYzLDE3NC4zNDE4IDE3Mi40NzY2LDcxLjI4OTA2MiAzMDAuNjA5MzcsNzEuMjg5MDYyIFoiIGlkPSJwYXRoMzkwIi8+CiA8cGF0aCBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiM1NWFhZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOn'+
			'JvdW5kOy1pbmtzY2FwZS1zdHJva2U6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzOyBmaWxsLW9wYWNpdHk6MSIgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3NzcyIgZD0ibSAzMDAsMTEwIGMgLTI3LjE0MDQyLDAgLTUwLDIyLjg1OTU4IC01MCw1MCAwLDI3LjE0MDQyIDIyLjg1OTU4LDUwIDUwLDUwIDI3LjE0MDQyLDAgNTAsLTIyLjg1OTU4IDUwLC01MCAwLC0yNy4xNDA0MiAtMjIuODU5NTgsLTUwIC01MCwtNTAgeiIgaWQ9InBhdGgxNjI5Ii8+Cjwvc3ZnPgo=';
		me._info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoMToxLjIuMisyMDIyMTIwNTE1NTArYjBhODQ4NjU0MSkiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiBpZD0ic3ZnOTcyNCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIGhlaWdodD'+
			'0iNjAwIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbWU9ImFkZC1pbmZvLnN2ZyIgd2lkdGg9IjYwMCIgdmVyc2lvbj0iMS4xIj4KIDxkZWZzIGlkPSJkZWZzOTcyOCIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA4MCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaWQ9Im5hbWVkdmlldzk3MjYiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9'+
			'IjAiIGlua3NjYXBlOnpvb209IjAuNTk0ODA4NTUiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDkiIGlua3NjYXBlOmN4PSI3OC4xNzY0MTUiIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlua3NjYXBlOndpbmRvdy14PSIwIiBzaG93Z3VpZGVzPSJ0cnVlIiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzk3MjQiIGlua3NjYXBlOmN5PSI0ODMuMzQ4OCIgaW5rc2NhcGU6d2luZG93LW'+
			'1heGltaXplZD0iMSI+CiAgPGlua3NjYXBlOmdyaWQgb3JpZ2lueD0iMCIgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDk5NzIiIG9yaWdpbnk9IjAiLz4KICA8c29kaXBvZGk6Z3VpZGUgb3JpZW50YXRpb249IjEsMCIgaW5rc2NhcGU6bG9ja2VkPSJmYWxzZSIgcG9zaXRpb249IjMwMCwzNjAiIGlkPSJndWlkZTEyMDgiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kOy1pbmtzY2FwZS1zdHJva2U6bm9uZTsgZmlsbC1vcGFjaXR5OjEiIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3NzcyIgZD0i'+
			'bSAzMDAsMjM0IGMgLTIyLjA5MTM5LDAgLTQwLDE3LjkwODYxIC00MCw0MCB2IDE3MCBjIDAsMjIuMDkxMzkgMTcuOTA4NjEsNDAgNDAsNDAgMjIuMDkxMzksMCA0MCwtMTcuOTA4NjEgNDAsLTQwIFYgMjc0IGMgMCwtMjIuMDkxMzkgLTE3LjkwODYxLC00MCAtNDAsLTQwIHoiIGlkPSJwYXRoMTIxMCIvPgogPHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDoxLjA1MTAzO2NvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDstaW5rc2NhcGUtc3Ryb2tlOm5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VyczsgZmlsbC'+
			'1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTUxNzMyMDUsMCwwLDAuOTUxMTU3ODcsMTMuOTAxMTc0LDEyLjE2ODc5NCkiIGQ9Im0gMzAwLjYwOTM3LC0xMi43OTI5NjkgYyAtMTczLjYwNTk5LDAgLTMxNS4yMTQ4MzksMTQxLjcyNDgzOSAtMzE1LjIxNDgzOSwzMTUuNDA0Mjk5IDAsMTczLjY3OTQ1IDE0MS42MDg4NDksMzE1LjQwNDI5IDMxNS4yMTQ4MzksMzE1LjQwNDI5IDE3My42MDYsMCAzMTUuMjE0ODUsLTE0MS43MjQ4NCAzMTUuMjE0ODUsLTMxNS40MDQyOSAwLC0xNzMuNjc5NDYgLTE0MS42MDg4NSwtMzE1LjQwNDI5OSAtMzE1LjIxNDg1LC0zMTUuNDA0Mjk5IHogbSAwLDg0'+
			'LjA4MjAzMSBjIDEyOC4xMzI3OCwxMGUtNyAyMzEuMTMwODYsMTAzLjA1MjczOCAyMzEuMTMwODYsMjMxLjMyMjI2OCAwLDEyOC4yNjk1MiAtMTAyLjk5ODA4LDIzMS4zMjIyNiAtMjMxLjEzMDg2LDIzMS4zMjIyNiBDIDE3Mi40NzY2LDUzMy45MzM1OSA2OS40NzY1NjIsNDMwLjg4MDg1IDY5LjQ3NjU2MiwzMDIuNjExMzMgNjkuNDc2NTYzLDE3NC4zNDE4IDE3Mi40NzY2LDcxLjI4OTA2MiAzMDAuNjA5MzcsNzEuMjg5MDYyIFoiIGlkPSJwYXRoMzkwIi8+CiA8cGF0aCBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOn'+
			'JvdW5kOy1pbmtzY2FwZS1zdHJva2U6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzOyBmaWxsLW9wYWNpdHk6MSIgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3NzcyIgZD0ibSAzMDAsMTEwIGMgLTI3LjE0MDQyLDAgLTUwLDIyLjg1OTU4IC01MCw1MCAwLDI3LjE0MDQyIDIyLjg1OTU4LDUwIDUwLDUwIDI3LjE0MDQyLDAgNTAsLTIyLjg1OTU4IDUwLC01MCAwLC0yNy4xNDA0MiAtMjIuODU5NTgsLTUwIC01MCwtNTAgeiIgaWQ9InBhdGgxNjI5Ii8+Cjwvc3ZnPgo=';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="\u0130nfo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('asm_info') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.right='10px';
					me._info.style.bottom='10px';
				}
				else {
					me._info.style.right='10px';
					me._info.style.bottom='10px';
				}
			}
		}
		me._info.logicBlock_position();
		me._info.onclick=function (e) {
			player.setVariableValue('asm_info', !player.getVariableValue('asm_info'));
		}
		me._info.onmouseenter=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
		}
		me._info.onmouseleave=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._info);
		el=me._show_backround=document.createElement('div');
		el.ggId="show_backround";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px 10px 10px 10px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : -350px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._show_backround.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_backround.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('asm_show_open') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._show_backround.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._show_backround.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._show_backround.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._show_backround.ggCurrentLogicStatePosition == 0) {
					me._show_backround.style.left='10px';
					me._show_backround.style.bottom='10px';
				}
				else {
					me._show_backround.style.left='-350px';
					me._show_backround.style.bottom='10px';
				}
			}
		}
		me._show_backround.logicBlock_position();
		me._show_backround.ggUpdatePosition=function (useTransition) {
		}
		el=me._asm_kat_plani=document.createElement('div');
		els=me._asm_kat_plani__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgJ2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkJz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHdpZHRoPSI1MTIuMDAwMDAwcHQiIHZlcnNpb249IjEuMCIgaGVpZ2h0PSI1MTIuMDAwMDAwcHQiPgogPGcgZmlsbD0iIzU1YWFmZi'+
			'IgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIgc3Ryb2tlPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiPgogIDxwYXRoIGZpbGw9IiM1NWFhZmYiIGZpbGwtb3BhY2l0eT0iMSIgZD0iTTE1OSA1MTA2IGMtNTYgLTIwIC05NiAtNTMgLTEyNiAtMTA0IGwtMjggLTQ3IDAgLTIzOTYgMCAtMjM5NiAzMCAtNDkgYzE5IC0zMCA0OSAtNjAgNzkgLTc5IGw0OSAtMzAgMTM3NCAtMyAxMzc0IC0yIDQ5IDIxIGM4OCAzOCAxNDAgMTE3IDE0MCAyMTEgLTEgOTEgLTQ3IDE2NSAtMTMxIDIxMCBsLTQ0IDIzIC0xMjI3IDMgLTEyMjggMyAw'+
			'IDEwMDQgMCAxMDA1IDU0MCAwIDU0MCAwIDAgLTQzNyBjMCAtMjYzIDQgLTQ1MiAxMCAtNDc0IDE0IC01MiA0OSAtOTkgOTYgLTEzMiAzMiAtMjMgNTYgLTMwIDEwNyAtMzQgNTggLTUgNzMgLTIgMTIyIDIyIDY3IDMzIDEwOSA4NSAxMjQgMTU2IDE1IDcwIDE1IDIxOTggMCAyMjY5IC0xNCA2NCAtNjAgMTI1IC0xMTkgMTU3IC0zOCAyMCAtNTYgMjQgLTExNyAyMSAtNjEgLTMgLTc4IC04IC0xMTUgLTM0IC00OSAtMzQgLTgzIC04MSAtOTggLTEzMyAtNiAtMjIgLTEwIC0yMTEgLTEwIC00NzMgbDAgLTQzOCAtNTQwIDAgLTU0MCAwIDAgODUwIDAgODUwIDExNjAgMCAxMTYwIDAgMCAtNTgzIGMwIC'+
			'02MzEgMSAtNjUxIDU0IC03MjAgMTUgLTIwIDUxIC00NyA3OSAtNjIgbDUxIC0yNSA1OTMgMCBjNjU0IDAgNjMzIC0yIDcwMiA2MyAxMTggMTEyIDg1IDMxMCAtNjQgMzc4IC0zNyAxNyAtNzUgMTkgLTQ5MiAxOSBsLTQ1MyAwIDAgNDY1IDAgNDY1IDY5NSAwIDY5NSAwIDAgLTEzOTUgMCAtMTM5NSAtODM4IDAgLTgzOCAwIC01MiAtMjYgYy0xNTkgLTc5IC0xNzAgLTMwMyAtMTkgLTQwMSBsNDIgLTI4IDg1MyAtMyA4NTIgLTIgMCAtNDY0IDAgLTQ2NCAtMjE3IC00IGMtMjA0IC0zIC0yMjEgLTQgLTI2NSAtMjYgLTExMiAtNTUgLTE2MCAtMTg0IC0xMTMgLTMwMCAyMiAtNTMgOTIgLTExNiAxNDcg'+
			'LTEzMSAzMSAtOSAxNDYgLTExIDM5OSAtOSBsMzU2IDMgNDkgMzAgYzMwIDE5IDYwIDQ5IDc5IDc5IGwzMCA0OSAwIDIzOTcgMCAyMzk3IC0zMCA0OSBjLTE5IDMwIC00OSA2MCAtNzkgNzkgbC00OSAzMCAtMjM4MSAyIGMtMTkyOSAyIC0yMzg4IDAgLTI0MTcgLTExeiIvPgogPC9nPgo8L3N2Zz4K';
		me._asm_kat_plani__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._asm_kat_plani__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgJ2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkJz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHdpZHRoPSI1MTIuMDAwMDAwcHQiIHZlcnNpb249IjEuMCIgaGVpZ2h0PSI1MTIuMDAwMDAwcHQiPgogPGcgZmlsbD0iIzAwMDAwMC'+
			'IgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIgc3Ryb2tlPSJub25lIj4KICA8cGF0aCBkPSJNMTU5IDUxMDYgYy01NiAtMjAgLTk2IC01MyAtMTI2IC0xMDQgbC0yOCAtNDcgMCAtMjM5NiAwIC0yMzk2IDMwIC00OSBjMTkgLTMwIDQ5IC02MCA3OSAtNzkgbDQ5IC0zMCAxMzc0IC0zIDEzNzQgLTIgNDkgMjEgYzg4IDM4IDE0MCAxMTcgMTQwIDIxMSAtMSA5MSAtNDcgMTY1IC0xMzEgMjEwIGwtNDQgMjMgLTEyMjcgMyAtMTIyOCAzIDAgMTAwNCAwIDEwMDUgNTQwIDAgNTQwIDAgMCAtNDM3IGMwIC0yNjMgNCAtNDUyIDEw'+
			'IC00NzQgMTQgLTUyIDQ5IC05OSA5NiAtMTMyIDMyIC0yMyA1NiAtMzAgMTA3IC0zNCA1OCAtNSA3MyAtMiAxMjIgMjIgNjcgMzMgMTA5IDg1IDEyNCAxNTYgMTUgNzAgMTUgMjE5OCAwIDIyNjkgLTE0IDY0IC02MCAxMjUgLTExOSAxNTcgLTM4IDIwIC01NiAyNCAtMTE3IDIxIC02MSAtMyAtNzggLTggLTExNSAtMzQgLTQ5IC0zNCAtODMgLTgxIC05OCAtMTMzIC02IC0yMiAtMTAgLTIxMSAtMTAgLTQ3MyBsMCAtNDM4IC01NDAgMCAtNTQwIDAgMCA4NTAgMCA4NTAgMTE2MCAwIDExNjAgMCAwIC01ODMgYzAgLTYzMSAxIC02NTEgNTQgLTcyMCAxNSAtMjAgNTEgLTQ3IDc5IC02MiBsNTEgLTI1ID'+
			'U5MyAwIGM2NTQgMCA2MzMgLTIgNzAyIDYzIDExOCAxMTIgODUgMzEwIC02NCAzNzggLTM3IDE3IC03NSAxOSAtNDkyIDE5IGwtNDUzIDAgMCA0NjUgMCA0NjUgNjk1IDAgNjk1IDAgMCAtMTM5NSAwIC0xMzk1IC04MzggMCAtODM4IDAgLTUyIC0yNiBjLTE1OSAtNzkgLTE3MCAtMzAzIC0xOSAtNDAxIGw0MiAtMjggODUzIC0zIDg1MiAtMiAwIC00NjQgMCAtNDY0IC0yMTcgLTQgYy0yMDQgLTMgLTIyMSAtNCAtMjY1IC0yNiAtMTEyIC01NSAtMTYwIC0xODQgLTExMyAtMzAwIDIyIC01MyA5MiAtMTE2IDE0NyAtMTMxIDMxIC05IDE0NiAtMTEgMzk5IC05IGwzNTYgMyA0OSAzMCBjMzAgMTkgNjAg'+
			'NDkgNzkgNzkgbDMwIDQ5IDAgMjM5NyAwIDIzOTcgLTMwIDQ5IGMtMTkgMzAgLTQ5IDYwIC03OSA3OSBsLTQ5IDMwIC0yMzgxIDIgYy0xOTI5IDIgLTIzODggMCAtMjQxNyAtMTF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._asm_kat_plani__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="asm_kat_plani";
		el.ggDx=44;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 44px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_kat_plani.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._asm_kat_plani.onclick=function (e) {
			player.setVariableValue('vis_show_plan', !player.getVariableValue('vis_show_plan'));
		}
		me._asm_kat_plani.onmouseenter=function (e) {
			me._asm_kat_plani__img.style.visibility='hidden';
			me._asm_kat_plani__imgo.style.visibility='inherit';
			me.elementMouseOver['asm_kat_plani']=true;
		}
		me._asm_kat_plani.onmouseleave=function (e) {
			me._asm_kat_plani__img.style.visibility='inherit';
			me._asm_kat_plani__imgo.style.visibility='hidden';
			me.elementMouseOver['asm_kat_plani']=false;
		}
		me._asm_kat_plani.ggUpdatePosition=function (useTransition) {
		}
		me._show_backround.appendChild(me._asm_kat_plani);
		el=me._asm_map=document.createElement('div');
		els=me._asm_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9IkxheWVyXzEiIHdpZHRoPSI4MDBweCIgZGF0YS1uYW1lPSJMYXllciAxIiBoZWlnaHQ9IjgwMHB4Ij4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojNTVhYWZmO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoxLjkxcHg7fS5jbH'+
			'MtMntmaWxsOiM1NWFhZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjE3LjE3IDIwLjAzIDIyLjUgMjEuNTUgMjIuNSA0LjM2IDE1LjgyIDIuNDYgOC4xOCA0LjM2IDEuNSAyLjQ2IDEuNSAxOS42NCA4LjE4IDIxLjU1IDE0LjQzIDE5Ljk4Ii8+CiA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOS42NCwxNS41OGMwLDIuMzktMy44Miw2LTMuODIsNlMxMiwxOCwxMiwxNS41OEEzLjcsMy43LDAsMCwxLDE1LjgyLDEyLDMuNywzLjcsMCwwLDEsMTkuNjQsMTUuNThaIi8+CiA8Y2lyY2xlIGNsYXNzPSJjbHMtMiIgcj0iMC45NSIgY3g9IjE1LjgyIiBj'+
			'eT0iMTUuODIiLz4KIDxsaW5lIHgxPSI4LjE4IiB5MT0iNC4zNiIgY2xhc3M9ImNscy0xIiB5Mj0iMjEuNTUiIHgyPSI4LjE4Ii8+CiA8bGluZSB4MT0iMTUuODIiIHkxPSIyLjQ1IiBjbGFzcz0iY2xzLTEiIHkyPSIxMiIgeDI9IjE1LjgyIi8+Cjwvc3ZnPgo=';
		me._asm_map__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._asm_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9IkxheWVyXzEiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDIwMjAyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoxLjkxcHg7fS5jbH'+
			'MtMntmaWxsOiMwMjAyMDI7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjE3LjE3IDIwLjAzIDIyLjUgMjEuNTUgMjIuNSA0LjM2IDE1LjgyIDIuNDYgOC4xOCA0LjM2IDEuNSAyLjQ2IDEuNSAxOS42NCA4LjE4IDIxLjU1IDE0LjQzIDE5Ljk4Ii8+CiA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOS42NCwxNS41OGMwLDIuMzktMy44Miw2LTMuODIsNlMxMiwxOCwxMiwxNS41OEEzLjcsMy43LDAsMCwxLDE1LjgyLDEyLDMuNywzLjcsMCwwLDEsMTkuNjQsMTUuNThaIi8+CiA8Y2lyY2xlIGNsYXNzPSJjbHMtMiIgcj0iMC45NSIgY3g9IjE1LjgyIiBj'+
			'eT0iMTUuODIiLz4KIDxsaW5lIHgxPSI4LjE4IiBjbGFzcz0iY2xzLTEiIHkxPSI0LjM2IiB5Mj0iMjEuNTUiIHgyPSI4LjE4Ii8+CiA8bGluZSB4MT0iMTUuODIiIGNsYXNzPSJjbHMtMSIgeTE9IjIuNDUiIHkyPSIxMiIgeDI9IjE1LjgyIi8+Cjwvc3ZnPgo=';
		me._asm_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="asm_map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._asm_map.onclick=function (e) {
			player.setVariableValue('vis_show', !player.getVariableValue('vis_show'));
		}
		me._asm_map.onmouseenter=function (e) {
			me._asm_map__img.style.visibility='hidden';
			me._asm_map__imgo.style.visibility='inherit';
			me.elementMouseOver['asm_map']=true;
		}
		me._asm_map.onmouseleave=function (e) {
			me._asm_map__img.style.visibility='inherit';
			me._asm_map__imgo.style.visibility='hidden';
			me.elementMouseOver['asm_map']=false;
		}
		me._asm_map.ggUpdatePosition=function (useTransition) {
		}
		me._show_backround.appendChild(me._asm_map);
		el=me._navigasyon=document.createElement('div');
		els=me._navigasyon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIiB2aWV3Qm94PSIwIDAgNDQuNDEyIDQ0LjQxMiIgaWQ9IkNhcGFfMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgaGVpZ2h0PSI4MDBweCIgZmlsbD0iIzAwYWFmZiIgd2lkdGg9IjgwMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cGF0aCBkPSJNMTQuNjAyLDI5LjYwN2MwLTIuMjk3LTEuODY5LTQuMTY2LTQuMTY2LTQuMTY2UzYuMjcsMjcuMzEsNi4yNywyOS42MDdzMS44NjksNC4xNjYsNC4xNjYsNC4xNjYgICAgUzE0LjYwMiwzMS45MDUsMTQuNjAyLDI5LjYwN3ogTTEwLjQzNiwzMi43MmMtMS43MTYsMC0zLjExMS0xLjM5Ni0zLjExMS0zLjExM2MwLTEuNzE1LDEuMzk2LTMuMTExLDMuMTExLTMuMTExICAg'+
			'IHMzLjExMSwxLjM5NiwzLjExMSwzLjExMUMxMy41NDgsMzEuMzI0LDEyLjE1MiwzMi43MiwxMC40MzYsMzIuNzJ6Ii8+CiAgIDxwYXRoIGQ9Ik0zNy4xNjQsMC4zNzNjLTMuOTk3LDAtNy4yNDgsMy4yNTEtNy4yNDgsNy4yNDhjMCwyLjEzOSwxLjEzNSw0LjE5OSwyLjQ2Niw1Ljg4OWwtOS4xNTcsOC43NiAgICBjLTAuNTg5LDAuNTY0LTAuOTYzLDEuMzE3LTEuMDU3LDIuMTI4TDIwLjcxMSwzNy4wNGgtMi43MjJjMC4xODYtMC4yNjksMC4zNzUtMC41MzIsMC41NDktMC44MTIgICAgYzEuMjMyLTEuOTc5LDIuMTE5LTQuMjM2LDIuMTE5LTYuNjRjMC01LjY5NC00LjYzMy0xMC4zMjktMTAuMzI4LT'+
			'EwLjMyOVMwLDIzLjg5NCwwLDI5LjU4OGMwLDQuODM3LDQuMDU0LDkuNDAxLDYuODcsMTEuOTkxICAgIGMwLjU4MiwwLjUzNiwxLjExMiwwLjk5MiwxLjU0MiwxLjM0M2MwLjYwNCwwLjQ5NCwxLjAxNSwwLjc5NSwxLjA5LDAuODUxYzAuMjQ2LDAuMTc4LDAuNTM3LDAuMjY3LDAuODI3LDAuMjY3ICAgIGMwLjEwNCwwLDEzLjUwMiwwLDEzLjUwMiwwYzEuNzc4LDAsMy4yNzItMS4zMzMsMy40NzgtMy4xMDFsMS42NjgtMTQuNDg1YzAsMCwxMC45MTQtMTAuNTYsMTEuMDk3LTEwLjc4MiAgICBjMS42NzctMi4wNDUsNC4zMzktNC43Myw0LjMzOS04LjA1MkM0NC40MTEsMy42MjQsNDEuMTYsMC4zNzMs'+
			'MzcuMTY0LDAuMzczeiBNMi44MjgsMjkuNTg4YzAtNC4xMzYsMy4zNjUtNy41LDcuNTAxLTcuNSAgICBjNC4xMzYsMCw3LjUsMy4zNjUsNy41LDcuNWMwLDUuMDMzLTUuMzg1LDkuNjYtNy40NzUsMTEuMjY1QzguMjY3LDM5LjE2MiwyLjgyOCwzNC4yOTgsMi44MjgsMjkuNTg4eiBNMzcuMTc4LDE1LjUwNiAgICBjLTEuODY3LTEuNTAxLTUuMjYyLTQuODU1LTUuMjYyLTcuODg3YzAtMi44OTQsMi4zNTQtNS4yNDgsNS4yNDgtNS4yNDhzNS4yNDcsMi4zNTQsNS4yNDcsNS4yNDggICAgQzQyLjQxMSwxMS4xNDMsMzguNjQxLDE0LjM4MiwzNy4xNzgsMTUuNTA2eiIvPgogICA8cGF0aCBkPSJNMzcuMj'+
			'M5LDQuNTcyYy0xLjY5NiwwLTMuMDc3LDEuMzgtMy4wNzcsMy4wNzdjMCwxLjY5NywxLjM4MSwzLjA3NywzLjA3NywzLjA3N3MzLjA3Ny0xLjM4LDMuMDc3LTMuMDc3ICAgIEM0MC4zMTYsNS45NTIsMzguOTM2LDQuNTcyLDM3LjIzOSw0LjU3MnogTTM3LjIzOSw5LjY3MmMtMS4xMTUsMC0yLjAyMi0wLjkwOC0yLjAyMi0yLjAyM2MwLTEuMTE1LDAuOTA3LTIuMDIzLDIuMDIyLTIuMDIzICAgIGMxLjExNCwwLDIuMDIyLDAuOTA4LDIuMDIyLDIuMDIzQzM5LjI2Miw4Ljc2NSwzOC4zNTQsOS42NzIsMzcuMjM5LDkuNjcyeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._navigasyon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._navigasyon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIiB2aWV3Qm94PSIwIDAgNDQuNDEyIDQ0LjQxMiIgaWQ9IkNhcGFfMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgaGVpZ2h0PSI4MDBweCIgZmlsbD0iI2ZmNTU3ZiIgd2lkdGg9IjgwMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cGF0aCBkPSJNMTQuNjAyLDI5LjYwN2MwLTIuMjk3LTEuODY5LTQuMTY2LTQuMTY2LTQuMTY2UzYuMjcsMjcuMzEsNi4yNywyOS42MDdzMS44NjksNC4xNjYsNC4xNjYsNC4xNjYgICAgUzE0LjYwMiwzMS45MDUsMTQuNjAyLDI5LjYwN3ogTTEwLjQzNiwzMi43MmMtMS43MTYsMC0zLjExMS0xLjM5Ni0zLjExMS0zLjExM2MwLTEuNzE1LDEuMzk2LTMuMTExLDMuMTExLTMuMTExICAg'+
			'IHMzLjExMSwxLjM5NiwzLjExMSwzLjExMUMxMy41NDgsMzEuMzI0LDEyLjE1MiwzMi43MiwxMC40MzYsMzIuNzJ6Ii8+CiAgIDxwYXRoIGQ9Ik0zNy4xNjQsMC4zNzNjLTMuOTk3LDAtNy4yNDgsMy4yNTEtNy4yNDgsNy4yNDhjMCwyLjEzOSwxLjEzNSw0LjE5OSwyLjQ2Niw1Ljg4OWwtOS4xNTcsOC43NiAgICBjLTAuNTg5LDAuNTY0LTAuOTYzLDEuMzE3LTEuMDU3LDIuMTI4TDIwLjcxMSwzNy4wNGgtMi43MjJjMC4xODYtMC4yNjksMC4zNzUtMC41MzIsMC41NDktMC44MTIgICAgYzEuMjMyLTEuOTc5LDIuMTE5LTQuMjM2LDIuMTE5LTYuNjRjMC01LjY5NC00LjYzMy0xMC4zMjktMTAuMzI4LT'+
			'EwLjMyOVMwLDIzLjg5NCwwLDI5LjU4OGMwLDQuODM3LDQuMDU0LDkuNDAxLDYuODcsMTEuOTkxICAgIGMwLjU4MiwwLjUzNiwxLjExMiwwLjk5MiwxLjU0MiwxLjM0M2MwLjYwNCwwLjQ5NCwxLjAxNSwwLjc5NSwxLjA5LDAuODUxYzAuMjQ2LDAuMTc4LDAuNTM3LDAuMjY3LDAuODI3LDAuMjY3ICAgIGMwLjEwNCwwLDEzLjUwMiwwLDEzLjUwMiwwYzEuNzc4LDAsMy4yNzItMS4zMzMsMy40NzgtMy4xMDFsMS42NjgtMTQuNDg1YzAsMCwxMC45MTQtMTAuNTYsMTEuMDk3LTEwLjc4MiAgICBjMS42NzctMi4wNDUsNC4zMzktNC43Myw0LjMzOS04LjA1MkM0NC40MTEsMy42MjQsNDEuMTYsMC4zNzMs'+
			'MzcuMTY0LDAuMzczeiBNMi44MjgsMjkuNTg4YzAtNC4xMzYsMy4zNjUtNy41LDcuNTAxLTcuNSAgICBjNC4xMzYsMCw3LjUsMy4zNjUsNy41LDcuNWMwLDUuMDMzLTUuMzg1LDkuNjYtNy40NzUsMTEuMjY1QzguMjY3LDM5LjE2MiwyLjgyOCwzNC4yOTgsMi44MjgsMjkuNTg4eiBNMzcuMTc4LDE1LjUwNiAgICBjLTEuODY3LTEuNTAxLTUuMjYyLTQuODU1LTUuMjYyLTcuODg3YzAtMi44OTQsMi4zNTQtNS4yNDgsNS4yNDgtNS4yNDhzNS4yNDcsMi4zNTQsNS4yNDcsNS4yNDggICAgQzQyLjQxMSwxMS4xNDMsMzguNjQxLDE0LjM4MiwzNy4xNzgsMTUuNTA2eiIvPgogICA8cGF0aCBkPSJNMzcuMj'+
			'M5LDQuNTcyYy0xLjY5NiwwLTMuMDc3LDEuMzgtMy4wNzcsMy4wNzdjMCwxLjY5NywxLjM4MSwzLjA3NywzLjA3NywzLjA3N3MzLjA3Ny0xLjM4LDMuMDc3LTMuMDc3ICAgIEM0MC4zMTYsNS45NTIsMzguOTM2LDQuNTcyLDM3LjIzOSw0LjU3MnogTTM3LjIzOSw5LjY3MmMtMS4xMTUsMC0yLjAyMi0wLjkwOC0yLjAyMi0yLjAyM2MwLTEuMTE1LDAuOTA3LTIuMDIzLDIuMDIyLTIuMDIzICAgIGMxLjExNCwwLDIuMDIyLDAuOTA4LDIuMDIyLDIuMDIzQzM5LjI2Miw4Ljc2NSwzOC4zNTQsOS42NzIsMzcuMjM5LDkuNjcyeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._navigasyon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Navigasyon";
		el.ggDx=-46;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 46px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._navigasyon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navigasyon.onclick=function (e) {
			player.openUrl("https:\/\/maps.google.com\/maps?q= 38.3713862,34.0406393","");
		}
		me._navigasyon.onmouseenter=function (e) {
			me._navigasyon__img.style.visibility='hidden';
			me._navigasyon__imgo.style.visibility='inherit';
			me.elementMouseOver['navigasyon']=true;
		}
		me._navigasyon.onmouseleave=function (e) {
			me._navigasyon__img.style.visibility='inherit';
			me._navigasyon__imgo.style.visibility='hidden';
			me.elementMouseOver['navigasyon']=false;
		}
		me._navigasyon.ggUpdatePosition=function (useTransition) {
		}
		me._show_backround.appendChild(me._navigasyon);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=-64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 64px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM1NWFhZmYiIHZpZXdCb3g9IjAgMCAxOTIwIDE5MjAiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4Ij4KIDxwYXRoIGQ9Ik0xNTUuNjc2IDEzNDkuMTl2MzM3LjNjMCA0Mi45OSAzNC44NDkgNzcuODMgNzcuODM4IDc3LjgzaDMzNy4yOTdWMTkyMEgyMzMuNTE0QzEwNC'+
			'41NDggMTkyMCAwIDE4MTUuNDUgMCAxNjg2LjQ5di0zMzcuM2gxNTUuNjc2Wm0xNzY0LjMyNCAwdjMzNy4zYzAgMTI4Ljk2LTEwNC41NSAyMzMuNTEtMjMzLjUxIDIzMy41MWgtMzM3LjN2LTE1NS42OGgzMzcuM2M0Mi45OSAwIDc3LjgzLTM0Ljg0IDc3LjgzLTc3Ljgzdi0zMzcuM0gxOTIwWk05NjAgNTQ0Ljg2NWMyMjkuMjcgMCA0MTUuMTQgMTg1Ljg2MiA0MTUuMTQgNDE1LjEzNSAwIDIyOS4yNy0xODUuODcgNDE1LjE0LTQxNS4xNCA0MTUuMTQtMjI5LjI3MyAwLTQxNS4xMzUtMTg1Ljg3LTQxNS4xMzUtNDE1LjE0IDAtMjI5LjI3MyAxODUuODYyLTQxNS4xMzUgNDE1LjEzNS00MTUuMTM1Wk0x'+
			'Njg2LjQ5IDBDMTgxNS40NSAwIDE5MjAgMTA0LjU0OCAxOTIwIDIzMy41MTR2MzM3LjI5N2gtMTU1LjY4VjIzMy41MTRjMC00Mi45ODktMzQuODQtNzcuODM4LTc3LjgzLTc3LjgzOGgtMzM3LjNWMFpNNTcwLjgxMSAwdjE1NS42NzZIMjMzLjUxNGMtNDIuOTg5IDAtNzcuODM4IDM0Ljg0OS03Ny44MzggNzcuODM4djMzNy4yOTdIMFYyMzMuNTE0QzAgMTA0LjU0OCAxMDQuNTQ4IDAgMjMzLjUxNCAwaDMzNy4yOTdaIi8+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMDAwMDAiIHZpZXdCb3g9IjAgMCAxOTIwIDE5MjAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCI+CiA8cGF0aCBkPSJNMTU1LjY3NiAxMzQ5LjE5djMzNy4zYzAgNDIuOTkgMzQuODQ5IDc3LjgzIDc3LjgzOCA3Ny44M2gzMzcuMjk3VjE5MjBIMjMzLjUxNEMxMDQuNTQ4IDE5MjAgMCAxODE1Lj'+
			'Q1IDAgMTY4Ni40OXYtMzM3LjNoMTU1LjY3NlptMTc2NC4zMjQgMHYzMzcuM2MwIDEyOC45Ni0xMDQuNTUgMjMzLjUxLTIzMy41MSAyMzMuNTFoLTMzNy4zdi0xNTUuNjhoMzM3LjNjNDIuOTkgMCA3Ny44My0zNC44NCA3Ny44My03Ny44M3YtMzM3LjNIMTkyMFpNOTYwIDU0NC44NjVjMjI5LjI3IDAgNDE1LjE0IDE4NS44NjIgNDE1LjE0IDQxNS4xMzUgMCAyMjkuMjctMTg1Ljg3IDQxNS4xNC00MTUuMTQgNDE1LjE0LTIyOS4yNzMgMC00MTUuMTM1LTE4NS44Ny00MTUuMTM1LTQxNS4xNCAwLTIyOS4yNzMgMTg1Ljg2Mi00MTUuMTM1IDQxNS4xMzUtNDE1LjEzNVpNMTY4Ni40OSAwQzE4MTUuNDUg'+
			'MCAxOTIwIDEwNC41NDggMTkyMCAyMzMuNTE0djMzNy4yOTdoLTE1NS42OFYyMzMuNTE0YzAtNDIuOTg5LTM0Ljg0LTc3LjgzOC03Ny44My03Ny44MzhoLTMzNy4zVjBaTTU3MC44MTEgMHYxNTUuNjc2SDIzMy41MTRjLTQyLjk4OSAwLTc3LjgzOCAzNC44NDktNzcuODM4IDc3LjgzOHYzMzcuMjk3SDBWMjMzLjUxNEMwIDEwNC41NDggMTA0LjU0OCAwIDIzMy41MTQgMGgzMzcuMjk3WiIvPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggDx=155;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 155px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._buttonimage_normalscreen=document.createElement('div');
		els=me._buttonimage_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMGFhZmYiIHZpZXdCb3g9IjAgMCAxOTIwIDE5MjAiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4Ij4KIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3MDYuNjcgMTA2LjY2N2gtMzIwVjBoMzIwQzE4MjQuNDkgMCAxOTIwIDk1LjUxMyAxOTIwIDIxMy4zMz'+
			'N2MzIwaC0xMDYuNjd2LTMyMGMwLTU4LjkxLTQ3Ljc1LTEwNi42NjYtMTA2LjY2LTEwNi42NjZaTTUzMy4zMzMgMHYxMDYuNjY3aC0zMjBjLTU4LjkxIDAtMTA2LjY2NiA0Ny43NTYtMTA2LjY2NiAxMDYuNjY2djMyMEgwdi0zMjBDMCA5NS41MTMgOTUuNTEzIDAgMjEzLjMzMyAwaDMyMFpNMCAxMzg2LjY3aDEwNi42Njd2MzIwYzAgNTguOTEgNDcuNzU2IDEwNi42NiAxMDYuNjY2IDEwNi42NmgzMjBWMTkyMGgtMzIwQzk1LjUxMyAxOTIwIDAgMTgyNC40OSAwIDE3MDYuNjd2LTMyMFpNMTM4Ni42NyAxOTIwdi0xMDYuNjdoMzIwYzU4LjkxIDAgMTA2LjY2LTQ3Ljc1IDEwNi42Ni0xMDYuNjZ2LTMy'+
			'MEgxOTIwdjMyMGMwIDExNy44Mi05NS41MSAyMTMuMzMtMjEzLjMzIDIxMy4zM2gtMzIwWk0xMjgwIDk2MGMwIDE3Ni43My0xNDMuMjcgMzIwLTMyMCAzMjAtMTc2LjczMSAwLTMyMC0xNDMuMjctMzIwLTMyMCAwLTE3Ni43MzEgMTQzLjI2OS0zMjAgMzIwLTMyMCAxNzYuNzMgMCAzMjAgMTQzLjI2OSAzMjAgMzIwWm0xMDYuNjcgMGMwIDIzNS42NC0xOTEuMDMgNDI2LjY3LTQyNi42NyA0MjYuNjctMjM1LjY0MSAwLTQyNi42NjctMTkxLjAzLTQyNi42NjctNDI2LjY3IDAtMjM1LjY0MSAxOTEuMDI2LTQyNi42NjcgNDI2LjY2Ny00MjYuNjY3IDIzNS42NCAwIDQyNi42NyAxOTEuMDI2IDQyNi42Ny'+
			'A0MjYuNjY3WiIvPgo8L3N2Zz4K';
		me._buttonimage_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._buttonimage_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMDAwMDAiIHZpZXdCb3g9IjAgMCAxOTIwIDE5MjAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCI+CiA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzA2LjY3IDEwNi42NjdoLTMyMFYwaDMyMEMxODI0LjQ5IDAgMTkyMCA5NS41MTMgMTkyMCAyMTMuMzMzdjMyMGgtMTA2LjY3di0zMj'+
			'BjMC01OC45MS00Ny43NS0xMDYuNjY2LTEwNi42Ni0xMDYuNjY2Wk01MzMuMzMzIDB2MTA2LjY2N2gtMzIwYy01OC45MSAwLTEwNi42NjYgNDcuNzU2LTEwNi42NjYgMTA2LjY2NnYzMjBIMHYtMzIwQzAgOTUuNTEzIDk1LjUxMyAwIDIxMy4zMzMgMGgzMjBaTTAgMTM4Ni42N2gxMDYuNjY3djMyMGMwIDU4LjkxIDQ3Ljc1NiAxMDYuNjYgMTA2LjY2NiAxMDYuNjZoMzIwVjE5MjBoLTMyMEM5NS41MTMgMTkyMCAwIDE4MjQuNDkgMCAxNzA2LjY3di0zMjBaTTEzODYuNjcgMTkyMHYtMTA2LjY3aDMyMGM1OC45MSAwIDEwNi42Ni00Ny43NSAxMDYuNjYtMTA2LjY2di0zMjBIMTkyMHYzMjBjMCAxMTcu'+
			'ODItOTUuNTEgMjEzLjMzLTIxMy4zMyAyMTMuMzNoLTMyMFpNMTI4MCA5NjBjMCAxNzYuNzMtMTQzLjI3IDMyMC0zMjAgMzIwLTE3Ni43MzEgMC0zMjAtMTQzLjI3LTMyMC0zMjAgMC0xNzYuNzMxIDE0My4yNjktMzIwIDMyMC0zMjAgMTc2LjczIDAgMzIwIDE0My4yNjkgMzIwIDMyMFptMTA2LjY3IDBjMCAyMzUuNjQtMTkxLjAzIDQyNi42Ny00MjYuNjcgNDI2LjY3LTIzNS42NDEgMC00MjYuNjY3LTE5MS4wMy00MjYuNjY3LTQyNi42NyAwLTIzNS42NDEgMTkxLjAyNi00MjYuNjY3IDQyNi42NjctNDI2LjY2NyAyMzUuNjQgMCA0MjYuNjcgMTkxLjAyNiA0MjYuNjcgNDI2LjY2N1oiLz4KPC9zdm'+
			'c+Cg==';
		me._buttonimage_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button-image_normalscreen";
		el.ggDx=155;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 155px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._buttonimage_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttonimage_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._buttonimage_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._buttonimage_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._buttonimage_normalscreen.style.transition='';
				if (me._buttonimage_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._buttonimage_normalscreen.style.visibility=(Number(me._buttonimage_normalscreen.style.opacity)>0||!me._buttonimage_normalscreen.style.opacity)?'inherit':'hidden';
					me._buttonimage_normalscreen.ggVisible=true;
				}
				else {
					me._buttonimage_normalscreen.style.visibility=(Number(me._buttonimage_normalscreen.style.opacity)>0||!me._buttonimage_normalscreen.style.opacity)?'inherit':'hidden';
					me._buttonimage_normalscreen.ggVisible=true;
				}
			}
		}
		me._buttonimage_normalscreen.logicBlock_visible();
		me._buttonimage_normalscreen.onmouseenter=function (e) {
			me._buttonimage_normalscreen__img.style.visibility='hidden';
			me._buttonimage_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['buttonimage_normalscreen']=true;
		}
		me._buttonimage_normalscreen.onmouseleave=function (e) {
			me._buttonimage_normalscreen__img.style.visibility='inherit';
			me._buttonimage_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['buttonimage_normalscreen']=false;
		}
		me._buttonimage_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._buttonimage_normalscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=-500;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : -49px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 2px) / 2) - 500px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_fullscreen.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tam Ekran\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_fullscreen.ggUpdateText();
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style.transition='';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Tam Ekran\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Tam Ekran\n\xc7\u0131k\u0131\u015f", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Tam Ekran\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.logicBlock_text();
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me._show_backround.appendChild(me._button_fullscreen);
		me.divSkin.appendChild(me._show_backround);
		el=me._asm_p_map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'ASM_Map';
		el.ggId="ASM_P_Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='bottom : 10px;';
		hs+='height : 247px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : -645px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_p_map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._asm_p_map_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_show') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._asm_p_map_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._asm_p_map_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._asm_p_map_1.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._asm_p_map_1.ggCurrentLogicStatePosition == 0) {
					me._asm_p_map_1.style.right='10px';
					me._asm_p_map_1.style.bottom='10px';
				}
				else {
					me._asm_p_map_1.style.right='-645px';
					me._asm_p_map_1.style.bottom='10px';
				}
			}
		}
		me._asm_p_map_1.logicBlock_position();
		me._asm_p_map_1.ggUpdatePosition=function (useTransition) {
			if (me._asm_p_map_1.ggMapNotLoaded == false) {
				me._asm_p_map_1.ggMap.invalidateSize(false);
			}
		}
		me.divSkin.appendChild(me._asm_p_map_1);
		el=me._asm_kat_map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="ASM_Kat_Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 2;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='bottom : 10px;';
		hs+='height : 247px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : -260px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_kat_map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._asm_kat_map_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_show_plan') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._asm_kat_map_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._asm_kat_map_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._asm_kat_map_1.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._asm_kat_map_1.ggCurrentLogicStatePosition == 0) {
					me._asm_kat_map_1.style.right='10px';
					me._asm_kat_map_1.style.bottom='10px';
				}
				else {
					me._asm_kat_map_1.style.right='-260px';
					me._asm_kat_map_1.style.bottom='10px';
				}
			}
		}
		me._asm_kat_map_1.logicBlock_position();
		me._asm_kat_map_1.ggCurrentLogicStatePosition = -1;
		me._asm_kat_map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._asm_kat_map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._asm_kat_map_1.ggCalculateFloorplanSize(mapDetails);
				me._asm_kat_map_1.ggShowSimpleFloorplan(mapDetails);
				me._asm_kat_map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._asm_kat_map_1.ggRadar) me._asm_kat_map_1.ggRadar.update();
		}
		me._asm_kat_map_1.ggUpdatePosition=function (useTransition) {
			me._asm_kat_map_1.ggUpdateConditionResize();
		}
		me.divSkin.appendChild(me._asm_kat_map_1);
		el=me._compass=document.createElement('div');
		el.ggId="Compass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._compass.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._compass.ggUpdatePosition=function (useTransition) {
		}
		el=me._compassring=document.createElement('div');
		el.ggId="CompassRing";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 14px solid rgba(0,0,0,0.686275);';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 28px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 28px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._compassring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassring.ggUpdatePosition=function (useTransition) {
		}
		el=me._n=document.createElement('div');
		els=me._n__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="N";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._n.ggUpdateText=function() {
			var params = [];
			var hs = player._("K", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._n.ggUpdateText();
		el.appendChild(els);
		me._n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._n.ggUpdatePosition=function (useTransition) {
		}
		me._compassring.appendChild(me._n);
		el=me._e=document.createElement('div');
		els=me._e__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="E";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : -13px;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._e.ggUpdateText=function() {
			var params = [];
			var hs = player._("D", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._e.ggUpdateText();
		el.appendChild(els);
		me._e.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._e.ggUpdatePosition=function (useTransition) {
		}
		me._compassring.appendChild(me._e);
		el=me._s=document.createElement('div');
		els=me._s__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="S";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:-180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -13px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._s.ggUpdateText=function() {
			var params = [];
			var hs = player._("G", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._s.ggUpdateText();
		el.appendChild(els);
		me._s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._s.ggUpdatePosition=function (useTransition) {
		}
		me._compassring.appendChild(me._s);
		el=me._w=document.createElement('div');
		els=me._w__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="W";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._w.ggUpdateText=function() {
			var params = [];
			var hs = player._("B", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._w.ggUpdateText();
		el.appendChild(els);
		me._w.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._w.ggUpdatePosition=function (useTransition) {
		}
		me._compassring.appendChild(me._w);
		me._compass.appendChild(me._compassring);
		el=me._compasspointer1=document.createElement('div');
		els=me._compasspointer1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiA8cGF0aCBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4xODEsODEuMzU5VjQ4LjQ3aDcuN0w1MCwxOC42NDEsMzUuMTE1LDQ4LjQ3aDcuN1Y4MS4zNTlINTcuMTgxWiIgaWQ9IkFycm93XzlfMSIgZmlsbC1vcGFjaXR5PSIwLjY4NjI3NSIgZGF0YS1uYW1lPSJBcnJvdyA5IDEiLz4KPC9zdmc+Cg==';
		me._compasspointer1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CompassPointer1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._compasspointer1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compasspointer1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('asm_compass') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._compasspointer1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._compasspointer1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._compasspointer1.style.transition='';
				if (me._compasspointer1.ggCurrentLogicStateVisible == 0) {
					me._compasspointer1.style.visibility="hidden";
					me._compasspointer1.ggVisible=false;
				}
				else {
					me._compasspointer1.style.visibility="hidden";
					me._compasspointer1.ggVisible=false;
				}
			}
		}
		me._compasspointer1.logicBlock_visible();
		me._compasspointer1.ggUpdatePosition=function (useTransition) {
		}
		me._compass.appendChild(me._compasspointer1);
		el=me._beamdot=document.createElement('div');
		el.ggId="BeamDot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._beamdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beamdot.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('asm_compass') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._beamdot.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._beamdot.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._beamdot.style.transition='';
				if (me._beamdot.ggCurrentLogicStateVisible == 0) {
					me._beamdot.style.visibility=(Number(me._beamdot.style.opacity)>0||!me._beamdot.style.opacity)?'inherit':'hidden';
					me._beamdot.ggVisible=true;
				}
				else {
					me._beamdot.style.visibility=(Number(me._beamdot.style.opacity)>0||!me._beamdot.style.opacity)?'inherit':'hidden';
					me._beamdot.ggVisible=true;
				}
			}
		}
		me._beamdot.logicBlock_visible();
		me._beamdot.ggUpdatePosition=function (useTransition) {
		}
		el=me._compassbeam=document.createElement('div');
		els=me._compassbeam__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiA8cGF0aCBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iY2xzLTEiIGQ9Ik01MCw1MEw2NiwxOEgzNEw1MCw1MCIgaWQ9IlRyaWFuZ2xlXzEiIGZpbGwtb3BhY2l0eT0iMC42ODYyNzUiIGRhdGEtbmFtZT0iVHJpYW5nbGUgMSIvPgo8L3N2Zz4K';
		me._compassbeam__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CompassBeam";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._compassbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassbeam.onclick=function (e) {
			player.moveToDefaultViewEx(4,2);
		}
		me._compassbeam.ggUpdatePosition=function (useTransition) {
		}
		me._beamdot.appendChild(me._compassbeam);
		me._compass.appendChild(me._beamdot);
		me.divSkin.appendChild(me._compass);
		el=me._show_open=document.createElement('div');
		els=me._show_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGZsYXQtbGluZSIgZmlsbC1vcGFjaXR5PSIxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJzZXR0aW5ncy1hbHQiIGhlaWdodD0iODAwcHgiIGZpbGw9IiM1NWFhZmYiIHdpZHRoPSI4MDBweCIgZGF0YS1uYW1lPSJGbGF0IExpbmUiPgogPHBhdGggc3R5bGU9ImZpbGw6IHJnYig0NCwgMTY5LC'+
			'AxODgpOyBzdHJva2Utd2lkdGg6IDI7IiBkPSJNMjEuMTksMTEuMjlsLTEuOS0xLjlhMSwxLDAsMCwxLS4yOS0uN1Y2YTEsMSwwLDAsMC0xLTFIMTUuMzFhMSwxLDAsMCwxLS43LS4yOWwtMS45LTEuOWExLDEsMCwwLDAtMS40MiwwbC0xLjksMS45YTEsMSwwLDAsMS0uNy4yOUg2QTEsMSwwLDAsMCw1LDZWOC42OWExLDEsMCwwLDEtLjI5LjdsLTEuOSwxLjlhMSwxLDAsMCwwLDAsMS40MmwxLjksMS45YTEsMSwwLDAsMSwuMjkuN1YxOGExLDEsMCwwLDAsMSwxSDguNjlhMSwxLDAsMCwxLC43LjI5bDEuOSwxLjlhMSwxLDAsMCwwLDEuNDIsMGwxLjktMS45YTEsMSwwLDAsMSwuNy0uMjlIMThhMSwx'+
			'LDAsMCwwLDEtMVYxNS4zMWExLDEsMCwwLDEsLjI5LS43bDEuOS0xLjlBMSwxLDAsMCwwLDIxLjE5LDExLjI5Wk0xMiwxNWEzLDMsMCwxLDEsMy0zQTMsMywwLDAsMSwxMiwxNVoiIGlkPSJzZWNvbmRhcnkiLz4KIDxwYXRoIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDI7IiBkPSJNMTUsMTJhMywzLDAsMSwxLTMtM0EzLDMsMCwwLDEsMTUsMTJabTQtMy4zMVY2YTEsMSwwLDAsMC0xLTFIMTUuMzFhMSwxLDAsMCwxLS43LS4yOWwtMS45LTEuOWExLDEsMCwwLD'+
			'AtMS40MiwwbC0xLjksMS45YTEsMSwwLDAsMS0uNy4yOUg2QTEsMSwwLDAsMCw1LDZWOC42OWExLDEsMCwwLDEtLjI5LjdsLTEuOSwxLjlhMSwxLDAsMCwwLDAsMS40MmwxLjksMS45YTEsMSwwLDAsMSwuMjkuN1YxOGExLDEsMCwwLDAsMSwxSDguNjlhMSwxLDAsMCwxLC43LjI5bDEuOSwxLjlhMSwxLDAsMCwwLDEuNDIsMGwxLjktMS45YTEsMSwwLDAsMSwuNy0uMjlIMThhMSwxLDAsMCwwLDEtMVYxNS4zMWExLDEsMCwwLDEsLjI5LS43bDEuOS0xLjlhMSwxLDAsMCwwLDAtMS40MmwtMS45LTEuOUExLDEsMCwwLDEsMTksOC42OVoiIGlkPSJwcmltYXJ5Ii8+Cjwvc3ZnPgo=';
		me._show_open__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Show_Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._show_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_open.onclick=function (e) {
			player.setVariableValue('asm_show_open', !player.getVariableValue('asm_show_open'));
		}
		me._show_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._show_open);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgJ2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkJz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHdpZHRoPSI1MTIuMDAwMDAwcHQiIGhlaWdodD0iNTEyLjAwMDAwMHB0IiB2ZXJzaW9uPSIxLjAiPgogPGcgZmlsbD0iIzU1YWFmZi'+
			'IgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIgc3Ryb2tlPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiPgogIDxwYXRoIGZpbGw9IiM1NWFhZmYiIGQ9Ik0yNjY1IDUxMTQgYy0zMzcgLTM3IC02NTAgLTE0MyAtOTI5IC0zMTYgLTExMSAtNjkgLTE2NiAtMTE1IC0xODMgLTE1NiAtMjUgLTYwIDcgLTEzNyA2NyAtMTYyIDUzIC0yMiA5OCAtNyAyMDUgNjUgMTczIDExOCA0MTcgMjI0IDYyMCAyNzEgODAwIDE4MiAxNjQ5IC0yMTAgMjAyNCAtOTM2IDMyIC02MyA2NiAtMTMyIDc1IC0xNTIgbDE1IC0zOCAtODI5IDAgLTgyOSAw'+
			'IC0zNyA3MCBjLTQ2IDg3IC0xNDcgMTg2IC0yMzYgMjI5IC03MyAzNSAtMTM1NCAzNTYgLTE1NjAgMzkwIC0yMzggNDAgLTQ3NSA1MiAtNTk0IDMwIC0yMTUgLTM5IC00MDggLTIyNSAtNDU5IC00NDEgLTEyIC01MyAtMTUgLTE5NSAtMTUgLTg3OSAwIC03ODMgMSAtODE5IDIwIC04OTQgNDAgLTE1NyAxNDcgLTI5NCAyODUgLTM2NyA5MiAtNDggMTYyIC02NyAyNjMgLTczIGw4MyAtNCAzIC03MyBjOCAtMTU2IDkxIC0yODAgMjI4IC0zNDMgNTcgLTI2IDEzNCAtNDAgMjg5IC01MSAxMTAgLTcgMTQ2IDQgMTc5IDU5IDI0IDM5IDI1IDc4IDQgMTIyIC0yOCA2MCAtNTEgNjggLTIzNyA4NSAtMTE0ID'+
			'EwIC0xNTQgMjQgLTE4MCA2NCAtMjEgMzIgLTMwIDkzIC0xOSAxMzEgNyAyNSAxNCAzMSA0MyAzMyA4NiA4IDM3MiA3MyA5NjkgMjIxIDQ5NCAxMjMgNjYwIDE2OCA3MTAgMTkzIDg2IDQ0IDE4NSAxNDIgMjI5IDIzMSBsMzQgNjcgMTAzOSAwIGMxMTMxIDAgMTA3NCAtMyAxMTEzIDU2IDQ1IDY5IDc3IDQ1MyA1NiA2NzAgLTE1IDE1MSAtNjIgMzg0IC04NSA0MTkgLTIzIDM1IC03MyA1NSAtMTM4IDU1IGwtNTMgMCAtMjQgNjggYy0zNSA5OCAtMTUxIDMyNCAtMjE3IDQyMiAtMzI0IDQ4NyAtODE5IDgxMCAtMTM5NiA5MTAgLTEyMCAyMSAtNDMxIDM1IC01MzMgMjR6IG0tMTgyOSAtOTY1IGMxODIg'+
			'LTE4IDI5MCAtNDEgOTkxIC0yMTUgNTk1IC0xNDcgNjgxIC0xNzEgNzIxIC0xOTggMjUgLTE3IDUyIC00MSA2MCAtNTQgMTMgLTIwIDEzIC0yMiAtNCAtMjggLTY0IC0yMCAtMTU1IC03NiAtMjEyIC0xMzAgLTc0IC02OSAtMTIyIC0xNDAgLTE2MCAtMjQyIC0yMiAtNTggLTI2IC04MyAtMjYgLTE5MiAtMSAtMTQyIDE2IC0yMDYgODEgLTMxNCA2NCAtMTA0IDE4OSAtMjA5IDI5NiAtMjQ3IDIwIC03IDM3IC0xNiAzNyAtMjAgMCAtMTMgLTgyIC04MSAtMTE0IC05NCAtNTMgLTIyIC0xMzY0IC0zNDMgLTE0ODkgLTM2NSAtMTU0IC0yNiAtNDA3IC00MiAtNDgwIC0zMCAtMTA3IDE3IC0xOTcgODMgLT'+
			'I0NCAxNzggbC0yOCA1NyAtMyA4MTUgYy0yIDcyNyAtMSA4MjAgMTQgODY0IDMyIDEwMCAxMDUgMTc1IDIwNCAyMDkgNTQgMTkgMjAwIDIyIDM1NiA2eiBtMzk5MyAtNzc2IGMyNCAtMTI1IDMzIC0yNzEgMjcgLTQxOCAtMyAtODIgLTkgLTE2MiAtMTIgLTE3OCBsLTYgLTI3IC0xMDY3IDIgLTEwNjYgMyAtNTAgMjUgYy0yNyAxMyAtNzAgNDUgLTk1IDcwIC02MyA2MyAtOTIgMTI4IC05OCAyMjAgLTcgMTIzIDQ0IDIyNiAxNDYgMjk3IDkyIDY0IDU0IDYyIDExODMgNjIgbDEwMjYgMSAxMiAtNTd6IiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBmaWxsPSIjNTVhYWZmIiBkPSJNNDU3MiAyMjY5'+
			'IGMtNTAgLTEwIC03MSAtMzUgLTExOSAtMTM4IC0xMjYgLTI2NyAtMTkyIC01OTQgLTE4MCAtODg1IDcgLTE4MSA5NSAtOTEzIDExMyAtOTQ4IDQ3IC05MSAxODQgLTg2IDIyNSA4IGwxOSA0MiAtNTAgNDMwIGMtMjggMjQzIC01MCA0NzQgLTUwIDUzMCAwIDI0OCA2MiA1MTQgMTc0IDc1MiAxNCAzMCAyNiA3MCAyNiA4OCAwIDgwIC03NyAxMzkgLTE1OCAxMjF6IiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBmaWxsPSIjNTVhYWZmIiBkPSJNMjg0NCAxMjkwIGMtMjkgLTExIC02MiAtNTUgLTExMiAtMTQ4IC03NiAtMTM5IC0yMTAgLTI2NiAtMzU3IC0zMzkgLTMzIC0xNyAtMjQ3IC05MyAtND'+
			'c1IC0xNjkgLTM4NSAtMTI5IC00MjAgLTEzOSAtNDkwIC0xMzkgLTEzMCAwIC0yMzQgNjcgLTI4OCAxODQgLTIxIDQ1IC0yNyA3NyAtMzIgMTY2IC02IDEyMCAtMTUgMTQ2IC02MyAxNzUgLTY2IDQxIC0xNTQgMTMgLTE4NCAtNTggLTEyIC0yOSAtMTQgLTYxIC0xMCAtMTUyIDggLTE3OCA1NiAtMjkxIDE3MyAtNDA4IDEyMiAtMTIyIDI4NCAtMTgzIDQ1MiAtMTY4IDU3IDQgMTQ3IDMwIDM2NCAxMDIgMTU5IDUzIDI5MiA5NCAyOTQgOTEgMiAtMiAxNCAtODAgMjUgLTE3MyAxMiAtMTAyIDI2IC0xNzggMzUgLTE5MiA0NyAtNzIgMTQ0IC04MSAyMDEgLTE4IDI5IDMyIDMzIDQyIDMzIDkzIDAgMzIg'+
			'LTkgMTMwIC0xOSAyMTggLTExIDg4IC0xOSAxNjAgLTE4IDE2MSAxIDEgNDEgMjAgODkgNDIgMjI3IDEwNSA0MTIgMjg0IDUyNCA1MDQgNDEgODEgNDUgMTQxIDEzIDE4MiAtMzggNDkgLTEwMiA2OCAtMTU1IDQ2eiIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgJ2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkJz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHdpZHRoPSI1MTIuMDAwMDAwcHQiIGhlaWdodD0iNTEyLjAwMDAwMHB0IiB2ZXJzaW9uPSIxLjAiPgogPGcgZmlsbD0iIzAwMDAwMC'+
			'IgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIgc3Ryb2tlPSJub25lIj4KICA8cGF0aCBkPSJNMjY2NSA1MTE0IGMtMzM3IC0zNyAtNjUwIC0xNDMgLTkyOSAtMzE2IC0xMTEgLTY5IC0xNjYgLTExNSAtMTgzIC0xNTYgLTI1IC02MCA3IC0xMzcgNjcgLTE2MiA1MyAtMjIgOTggLTcgMjA1IDY1IDE3MyAxMTggNDE3IDIyNCA2MjAgMjcxIDgwMCAxODIgMTY0OSAtMjEwIDIwMjQgLTkzNiAzMiAtNjMgNjYgLTEzMiA3NSAtMTUyIGwxNSAtMzggLTgyOSAwIC04MjkgMCAtMzcgNzAgYy00NiA4NyAtMTQ3IDE4NiAtMjM2IDIy'+
			'OSAtNzMgMzUgLTEzNTQgMzU2IC0xNTYwIDM5MCAtMjM4IDQwIC00NzUgNTIgLTU5NCAzMCAtMjE1IC0zOSAtNDA4IC0yMjUgLTQ1OSAtNDQxIC0xMiAtNTMgLTE1IC0xOTUgLTE1IC04NzkgMCAtNzgzIDEgLTgxOSAyMCAtODk0IDQwIC0xNTcgMTQ3IC0yOTQgMjg1IC0zNjcgOTIgLTQ4IDE2MiAtNjcgMjYzIC03MyBsODMgLTQgMyAtNzMgYzggLTE1NiA5MSAtMjgwIDIyOCAtMzQzIDU3IC0yNiAxMzQgLTQwIDI4OSAtNTEgMTEwIC03IDE0NiA0IDE3OSA1OSAyNCAzOSAyNSA3OCA0IDEyMiAtMjggNjAgLTUxIDY4IC0yMzcgODUgLTExNCAxMCAtMTU0IDI0IC0xODAgNjQgLTIxIDMyIC0zMCA5My'+
			'AtMTkgMTMxIDcgMjUgMTQgMzEgNDMgMzMgODYgOCAzNzIgNzMgOTY5IDIyMSA0OTQgMTIzIDY2MCAxNjggNzEwIDE5MyA4NiA0NCAxODUgMTQyIDIyOSAyMzEgbDM0IDY3IDEwMzkgMCBjMTEzMSAwIDEwNzQgLTMgMTExMyA1NiA0NSA2OSA3NyA0NTMgNTYgNjcwIC0xNSAxNTEgLTYyIDM4NCAtODUgNDE5IC0yMyAzNSAtNzMgNTUgLTEzOCA1NSBsLTUzIDAgLTI0IDY4IGMtMzUgOTggLTE1MSAzMjQgLTIxNyA0MjIgLTMyNCA0ODcgLTgxOSA4MTAgLTEzOTYgOTEwIC0xMjAgMjEgLTQzMSAzNSAtNTMzIDI0eiBtLTE4MjkgLTk2NSBjMTgyIC0xOCAyOTAgLTQxIDk5MSAtMjE1IDU5NSAtMTQ3IDY4'+
			'MSAtMTcxIDcyMSAtMTk4IDI1IC0xNyA1MiAtNDEgNjAgLTU0IDEzIC0yMCAxMyAtMjIgLTQgLTI4IC02NCAtMjAgLTE1NSAtNzYgLTIxMiAtMTMwIC03NCAtNjkgLTEyMiAtMTQwIC0xNjAgLTI0MiAtMjIgLTU4IC0yNiAtODMgLTI2IC0xOTIgLTEgLTE0MiAxNiAtMjA2IDgxIC0zMTQgNjQgLTEwNCAxODkgLTIwOSAyOTYgLTI0NyAyMCAtNyAzNyAtMTYgMzcgLTIwIDAgLTEzIC04MiAtODEgLTExNCAtOTQgLTUzIC0yMiAtMTM2NCAtMzQzIC0xNDg5IC0zNjUgLTE1NCAtMjYgLTQwNyAtNDIgLTQ4MCAtMzAgLTEwNyAxNyAtMTk3IDgzIC0yNDQgMTc4IGwtMjggNTcgLTMgODE1IGMtMiA3MjcgLT'+
			'EgODIwIDE0IDg2NCAzMiAxMDAgMTA1IDE3NSAyMDQgMjA5IDU0IDE5IDIwMCAyMiAzNTYgNnogbTM5OTMgLTc3NiBjMjQgLTEyNSAzMyAtMjcxIDI3IC00MTggLTMgLTgyIC05IC0xNjIgLTEyIC0xNzggbC02IC0yNyAtMTA2NyAyIC0xMDY2IDMgLTUwIDI1IGMtMjcgMTMgLTcwIDQ1IC05NSA3MCAtNjMgNjMgLTkyIDEyOCAtOTggMjIwIC03IDEyMyA0NCAyMjYgMTQ2IDI5NyA5MiA2NCA1NCA2MiAxMTgzIDYyIGwxMDI2IDEgMTIgLTU3eiIvPgogIDxwYXRoIGQ9Ik00NTcyIDIyNjkgYy01MCAtMTAgLTcxIC0zNSAtMTE5IC0xMzggLTEyNiAtMjY3IC0xOTIgLTU5NCAtMTgwIC04ODUgNyAtMTgx'+
			'IDk1IC05MTMgMTEzIC05NDggNDcgLTkxIDE4NCAtODYgMjI1IDggbDE5IDQyIC01MCA0MzAgYy0yOCAyNDMgLTUwIDQ3NCAtNTAgNTMwIDAgMjQ4IDYyIDUxNCAxNzQgNzUyIDE0IDMwIDI2IDcwIDI2IDg4IDAgODAgLTc3IDEzOSAtMTU4IDEyMXoiLz4KICA8cGF0aCBkPSJNMjg0NCAxMjkwIGMtMjkgLTExIC02MiAtNTUgLTExMiAtMTQ4IC03NiAtMTM5IC0yMTAgLTI2NiAtMzU3IC0zMzkgLTMzIC0xNyAtMjQ3IC05MyAtNDc1IC0xNjkgLTM4NSAtMTI5IC00MjAgLTEzOSAtNDkwIC0xMzkgLTEzMCAwIC0yMzQgNjcgLTI4OCAxODQgLTIxIDQ1IC0yNyA3NyAtMzIgMTY2IC02IDEyMCAtMTUgMT'+
			'Q2IC02MyAxNzUgLTY2IDQxIC0xNTQgMTMgLTE4NCAtNTggLTEyIC0yOSAtMTQgLTYxIC0xMCAtMTUyIDggLTE3OCA1NiAtMjkxIDE3MyAtNDA4IDEyMiAtMTIyIDI4NCAtMTgzIDQ1MiAtMTY4IDU3IDQgMTQ3IDMwIDM2NCAxMDIgMTU5IDUzIDI5MiA5NCAyOTQgOTEgMiAtMiAxNCAtODAgMjUgLTE3MyAxMiAtMTAyIDI2IC0xNzggMzUgLTE5MiA0NyAtNzIgMTQ0IC04MSAyMDEgLTE4IDI5IDMyIDMzIDQyIDMzIDkzIDAgMzIgLTkgMTMwIC0xOSAyMTggLTExIDg4IC0xOSAxNjAgLTE4IDE2MSAxIDEgNDEgMjAgODkgNDIgMjI3IDEwNSA0MTIgMjg0IDUyNCA1MDQgNDEgODEgNDUgMTQxIDEzIDE4'+
			'MiAtMzggNDkgLTEwMiA2OCAtMTU1IDQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 55px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style.transition='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.logicBlock_visible();
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseenter=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseleave=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -228px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -326px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_enter_vr.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_enter_vr.ggUpdateText();
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_enter_vr.style.transition='left 0s, bottom 0s';
				if (me._tt_enter_vr.ggCurrentLogicStatePosition == 0) {
					me._tt_enter_vr.style.left='0px';
					me._tt_enter_vr.style.bottom='-25px';
				}
				else {
					me._tt_enter_vr.style.left='-326px';
					me._tt_enter_vr.style.bottom='-228px';
				}
			}
		}
		me._tt_enter_vr.logicBlock_position();
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style.transition='left 0s, bottom 0s';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.logicBlock_visible();
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me.divSkin.appendChild(me._enter_vr);
		el=me._asm_tr_map=document.createElement('div');
		els=me._asm_tr_map__img=document.createElement('img');
		els.className='ggskin ggskin_asm_tr_map';
		hs=basePath + 'images/asm_tr_map.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px 10px 10px 10px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="asm_tr_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._asm_tr_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._asm_tr_map.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._asm_tr_map);
		me._asm_info.logicBlock_visible();
		me._info.logicBlock_position();
		me.elementMouseOver['info']=false;
		me._show_backround.logicBlock_position();
		me.elementMouseOver['asm_kat_plani']=false;
		me.elementMouseOver['asm_map']=false;
		me.elementMouseOver['navigasyon']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me._buttonimage_normalscreen.logicBlock_visible();
		me.elementMouseOver['buttonimage_normalscreen']=false;
		me._tt_fullscreen.logicBlock_text();
		me._asm_p_map_1.ggMarkerInstances=[];
		me._asm_p_map_1.ggLastNodeId=null;
		me._asm_p_map_1.ggMarkerArray=[];
		me._asm_p_map_1.ggGoogleMarkerArray=[];
		me._asm_p_map_1.ggLastZoom = -1;
		me._asm_p_map_1.ggLastLat = 0.0;
		me._asm_p_map_1.ggLastLng = 0.0;
		me._asm_p_map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._asm_p_map_1.ggRadar.update=function() {
			var radar=me._asm_p_map_1.ggRadar;
			var map=me._asm_p_map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._asm_p_map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._asm_p_map_1.ggMapId);
				pan -= me._asm_p_map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._asm_p_map_1.ggFilteredIds.length > 0 && me._asm_p_map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ff0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._asm_p_map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._asm_p_map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._asm_p_map_1.ggSetLayer=function(layerIndex) {
			if (typeof me._asm_p_map_1.ggMapLayers === 'object' && me._asm_p_map_1.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._asm_p_map_1.ggMapLayers).length) {
				me._asm_p_map_1.ggMap.removeLayer(me._asm_p_map_1.ggCurMap);
				me._asm_p_map_1.ggCurMap = me._asm_p_map_1.ggMapLayers[Object.keys(me._asm_p_map_1.ggMapLayers)[layerIndex]];
				me._asm_p_map_1.ggMap.addLayer(me._asm_p_map_1.ggCurMap);
			}
		}
		me._asm_p_map_1.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._asm_p_map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._asm_p_map_1.ggMapId);
			if (!me._asm_p_map_1.ggMapId) return;
			if (!me._asm_p_map_1.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._asm_p_map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._asm_p_map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._asm_p_map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._asm_p_map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._asm_p_map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._asm_p_map_1.ggLastLat, me._asm_p_map_1.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._asm_p_map_1.ggLastZoom == -1) me._asm_p_map_1.ggLastZoom = 14;
				var initZoom = keepZoom ? me._asm_p_map_1.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._asm_p_map_1.ggMap = L.map(me._asm_p_map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._asm_p_map_1.ggMap.setMaxBounds(maxBounds);
					me._asm_p_map_1.ggMap.setMinZoom(me._asm_p_map_1.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._asm_p_map_1.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._asm_p_map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._asm_p_map_1.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._asm_p_map_1.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._asm_p_map_1.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._asm_p_map_1.ggMapLayers, overlayMaps).addTo(me._asm_p_map_1.ggMap);
						me._asm_p_map_1.ggCurMap.addTo(me._asm_p_map_1.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._asm_p_map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._asm_p_map_1.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._asm_p_map_1.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._asm_p_map_1.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._asm_p_map_1.ggMapLayers, overlayMaps).addTo(me._asm_p_map_1.ggMap);
						me._asm_p_map_1.ggCurMap.addTo(me._asm_p_map_1.ggMap);
						me._asm_p_map_1.ggMap.on('baselayerchange', function(event) {
							me._asm_p_map_1.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._asm_p_map_1.ggMap);
					}
				}
				me._asm_p_map_1.ggMap.on('zoom', function() {
					me._asm_p_map_1.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._asm_p_map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._asm_p_map_1.mapHeightInDeg / 2;
					mapCenter.lng = me._asm_p_map_1.mapWidthInDeg / 2;
				}
				if (me._asm_p_map_1.ggLastZoom == -1) me._asm_p_map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._asm_p_map_1.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._asm_p_map_1.ggMap = L.map(me._asm_p_map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._asm_p_map_1.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._asm_p_map_1.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._asm_p_map_1.ggMap);
				me._asm_p_map_1.ggMap.on('move zoom', function() {
					me._asm_p_map_1.ggCheckBounds(mapDetails);
					me._asm_p_map_1.ggRadar.update();
				});
				me._asm_p_map_1.ggCheckBounds(mapDetails);
			}
			me._asm_p_map_1.ggMapNotLoaded = false;
		}
		me._asm_p_map_1.ggClearMap=function() {
		me._asm_p_map_1.ggClearMapMarkers();
		if (me._asm_p_map_1.ggMap) me._asm_p_map_1.ggMap.remove();
		me._asm_p_map_1.ggMap = null;
		me._asm_p_map_1.ggMapNotLoaded = true;
		}
		me._asm_p_map_1.ggClearMapMarkers=function() {
			me._asm_p_map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._asm_p_map_1.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._asm_p_map_1.ggMap);
				}
			}
			me._asm_p_map_1.ggGoogleMarkerArray=[];
		}
		me._asm_p_map_1.ggCenterNode=function(nodeId) {
			if (!me._asm_p_map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._asm_p_map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._asm_p_map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._asm_p_map_1.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._asm_p_map_1.ggFitBounds=function(force) {
			if (me._asm_p_map_1.ggMapNotLoaded) return;
			if (!me._asm_p_map_1.ggMap) return;
			if (me._asm_p_map_1.ggMarkerBounds.isValid()) {
				if (me._asm_p_map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._asm_p_map_1.ggGoogleMarkerArray).length > 1) {
					me._asm_p_map_1.ggMap.zoomOut(1, {animate: false});
					me._asm_p_map_1.ggMap.fitBounds(me._asm_p_map_1.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._asm_p_map_1.ggMap.setView(me._asm_p_map_1.ggMarkerBounds.getCenter(), me._asm_p_map_1.ggMap.getZoom());
					if (player.getMapType(me._asm_p_map_1.ggMapId) == 'web') {
						me._asm_p_map_1.ggMap.setZoom(18);
					} else {
						me._asm_p_map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		me._asm_p_map_1.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._asm_p_map_1.ggMap) return;
			me._asm_p_map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._asm_p_map_1.ggFilteredIds = [];
			if (me._asm_p_map_1.ggFilter != '') {
				var filter = me._asm_p_map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._asm_p_map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._asm_p_map_1.ggFilteredIds.length > 0) ids = me._asm_p_map_1.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._asm_p_map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._asm_p_map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lng'] == b['lng']) return a['lat'] - b['lat']; else return b['lng'] - a['lng']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			var marker;
			var markerLocation;
			me._asm_p_map_1.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._asm_p_map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._asm_p_map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var mapIcon = L.icon({iconUrl: basePath + 'images/_ggMapPin.png', iconRetinaUrl: basePath + 'images/_ggMapPin.png', iconSize : [40, 40], iconAnchor: [20, 40]});
					marker = L.marker(markerLocation, {title: player.getNodeTitle(id), icon: mapIcon});
					marker.ggId=id;
					marker.on('click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					marker.addTo(me._asm_p_map_1.ggMap);
					me._asm_p_map_1.ggGoogleMarkerArray[id] = marker;
					me._asm_p_map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._asm_p_map_1.ggMarkerBounds.isValid() && updateMapBounds) {
				me._asm_p_map_1.ggFitBounds(false);
			}
			skin.updateSize(me._asm_p_map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._asm_p_map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._asm_p_map_1.ggMapId = mapId;
			if (!me._asm_p_map_1.ggMapNotLoaded) {
				me._asm_p_map_1.ggLastZoom = me._asm_p_map_1.ggMap.getZoom();
				me._asm_p_map_1.ggLastLat = me._asm_p_map_1.ggMap.getCenter().lat;
				me._asm_p_map_1.ggLastLng = me._asm_p_map_1.ggMap.getCenter().lng;
				me._asm_p_map_1.ggClearMap();
				me._asm_p_map_1.ggInitMap(true);
				me._asm_p_map_1.ggInitMapMarkers(false);
			}
		}
		me._asm_p_map_1.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._asm_p_map_1.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._asm_p_map_1.mapHeightInDeg = me._asm_p_map_1.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._asm_p_map_1.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._asm_p_map_1.mapWidthInDeg = me._asm_p_map_1.mapHeightInDeg * mapAR;
			}
		}
		me._asm_p_map_1.ggInCheckBounds=false;
		me._asm_p_map_1.ggCheckBounds=function(mapDetails) {
			if (me._asm_p_map_1.ggInCheckBounds) return;
			me._asm_p_map_1.ggInCheckBounds = true;
			var mapCenter = me._asm_p_map_1.ggMap.getCenter();
			var currentZoom = me._asm_p_map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._asm_p_map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._asm_p_map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._asm_p_map_1.mapWidthInDeg < me._asm_p_map_1.clientWidth * pixelInDeg) {
				var xMargin = (me._asm_p_map_1.clientWidth * pixelInDeg - me._asm_p_map_1.mapWidthInDeg) / 2;
				if (x < me._asm_p_map_1.mapWidthInDeg / 2 - xMargin) x = me._asm_p_map_1.mapWidthInDeg / 2 - xMargin;
				if (x > me._asm_p_map_1.mapWidthInDeg / 2 + xMargin) x = me._asm_p_map_1.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._asm_p_map_1.mapWidthInDeg - xOffset) x = me._asm_p_map_1.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._asm_p_map_1.mapHeightInDeg < me._asm_p_map_1.clientHeight * pixelInDeg) {
				var yMargin = (me._asm_p_map_1.clientHeight * pixelInDeg - me._asm_p_map_1.mapHeightInDeg) / 2;
				if (y < -me._asm_p_map_1.mapHeightInDeg / 2 - yMargin) y = -me._asm_p_map_1.mapHeightInDeg / 2 - yMargin;
				if (y > -me._asm_p_map_1.mapHeightInDeg / 2 + yMargin) y = -me._asm_p_map_1.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._asm_p_map_1.mapHeightInDeg + yOffset) y = -me._asm_p_map_1.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._asm_p_map_1.ggMap.setView(newCenter, me._asm_p_map_1.ggMap.getZoom(), {animate: false});
			}
			me._asm_p_map_1.ggInCheckBounds = false;
		}
		me._asm_p_map_1.logicBlock_position();
		me._asm_kat_map_1.ggMarkerInstances=[];
		me._asm_kat_map_1.ggLastNodeId=null;
		me._asm_kat_map_1.ggSimpleFloorplanMarkerArray=[];
		me._asm_kat_map_1.ggFloorplanWidth=0;
		me._asm_kat_map_1.ggFloorplanHeight=0;
		me._asm_kat_map_1__mapdiv=document.createElement('div');
		me._asm_kat_map_1__mapdiv.className='ggskin ggskin_map';
		me._asm_kat_map_1.appendChild(me._asm_kat_map_1__mapdiv);
		me._asm_kat_map_1__img=document.createElement('img');
		me._asm_kat_map_1__img.className='ggskin ggskin_map';
		me._asm_kat_map_1__mapdiv.appendChild(me._asm_kat_map_1__img);
		me._asm_kat_map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._asm_kat_map_1.ggRadar.update=function() {
			var radar=me._asm_kat_map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._asm_kat_map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._asm_kat_map_1.ggFilteredIds.length > 0 && me._asm_kat_map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._asm_kat_map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._asm_kat_map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._asm_kat_map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._asm_kat_map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._asm_kat_map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._asm_kat_map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._asm_kat_map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._asm_kat_map_1.clientWidth;
			var mapHeight = me._asm_kat_map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._asm_kat_map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._asm_kat_map_1__img.setAttribute('src', imageFilename);
			me._asm_kat_map_1__img.setAttribute('loading', 'lazy');
		me._asm_kat_map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._asm_kat_map_1.ggFloorplanWidth + 'px;height:' + me._asm_kat_map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._asm_kat_map_1__img.setAttribute('style','width:' + me._asm_kat_map_1.ggFloorplanWidth + 'px;height:' + me._asm_kat_map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._asm_kat_map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._asm_kat_map_1.clientWidth / me._asm_kat_map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._asm_kat_map_1.ggFloorplanHeight = me._asm_kat_map_1.clientHeight;
				me._asm_kat_map_1.ggFloorplanWidth = me._asm_kat_map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._asm_kat_map_1.ggFloorplanWidth = me._asm_kat_map_1.clientWidth;
				me._asm_kat_map_1.ggFloorplanHeight = me._asm_kat_map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._asm_kat_map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._asm_kat_map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._asm_kat_map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._asm_kat_map_1.ggPermeableMap = true;
			} else {
				me._asm_kat_map_1.ggPermeableMap = false;
			}
			me._asm_kat_map_1.ggCalculateFloorplanSize(mapDetails);
			me._asm_kat_map_1.ggShowSimpleFloorplan(mapDetails);
			me._asm_kat_map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._asm_kat_map_1.ggMapNotLoaded = false;
		}
		me._asm_kat_map_1.ggClearMap=function() {
			me._asm_kat_map_1.ggClearMapMarkers();
			me._asm_kat_map_1.ggMapNotLoaded = true;
		}
		me._asm_kat_map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._asm_kat_map_1.ggMapId = mapId;
			if (!me._asm_kat_map_1.ggMapNotLoaded) {
				me._asm_kat_map_1.ggClearMap();
				me._asm_kat_map_1.ggInitMap();
				me._asm_kat_map_1.ggInitMapMarkers();
			}
		}
		me._asm_kat_map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._asm_kat_map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._asm_kat_map_1.ggMapId);
					var xPos = (me._asm_kat_map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._asm_kat_map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._asm_kat_map_1.ggHMarkerAnchorOffset;
					yPos -= me._asm_kat_map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._asm_kat_map_1.style['z-index'] + 2;
				}
			}
		}
		me._asm_kat_map_1.ggInitMapMarkers=function() {
			me._asm_kat_map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._asm_kat_map_1.ggFilteredIds = [];
			if (me._asm_kat_map_1.ggFilter != '') {
				var filter = me._asm_kat_map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._asm_kat_map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._asm_kat_map_1.ggFilteredIds.length > 0) ids = me._asm_kat_map_1.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._asm_kat_map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._asm_kat_map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lng'] == b['lng']) return a['lat'] - b['lat']; else return b['lng'] - a['lng']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._asm_kat_map_1.ggMapId);
				if (coords.length>=2) {
					me._asm_kat_map_1.ggHMarkerAnchorOffset = 20;
					me._asm_kat_map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._asm_kat_map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._asm_kat_map_1__mapdiv.appendChild(marker);
				}
			}
			me._asm_kat_map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._asm_kat_map_1);
		}
		me._asm_kat_map_1.ggClearMapMarkers=function() {
			for (id in me._asm_kat_map_1.ggSimpleFloorplanMarkerArray) {
				if (me._asm_kat_map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._asm_kat_map_1__mapdiv.removeChild(me._asm_kat_map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._asm_kat_map_1.ggMarkerInstances=[];
			me._asm_kat_map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._asm_kat_map_1.logicBlock_position();
		me._compasspointer1.logicBlock_visible();
		me._beamdot.logicBlock_visible();
		me._enter_vr.logicBlock_visible();
		me.elementMouseOver['enter_vr']=false;
		me._tt_enter_vr.logicBlock_position();
		me._tt_enter_vr.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._asm_info.logicBlock_visible();
			me._info.logicBlock_position();
			me._show_backround.logicBlock_position();
			me._asm_p_map_1.logicBlock_position();
			if (me._asm_p_map_1.ggLastActivMarker) {
				if (me._asm_p_map_1.ggLastActivMarker._div.ggDeactivate) me._asm_p_map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._asm_p_map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._asm_p_map_1.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._asm_p_map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._asm_p_map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._asm_p_map_1.ggChangeMap(mapId);
					}
				}
			}
			me._asm_p_map_1.ggLastNodeId = id;
			me._asm_p_map_1.ggRadar.update();
			me._asm_kat_map_1.logicBlock_position();
			var mapDetails = player.getMapDetails(me._asm_kat_map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._asm_kat_map_1.ggCalculateFloorplanSize(mapDetails);
				me._asm_kat_map_1.ggShowSimpleFloorplan(mapDetails);
				me._asm_kat_map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._asm_kat_map_1.ggRadar) me._asm_kat_map_1.ggRadar.update();
			if (me._asm_kat_map_1.ggLastNodeId) {
				var lastActiveMarker = me._asm_kat_map_1.ggSimpleFloorplanMarkerArray[me._asm_kat_map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._asm_kat_map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._asm_kat_map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._asm_kat_map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._asm_kat_map_1.ggChangeMap(mapId);
					}
				}
			}
			me._asm_kat_map_1.ggLastNodeId = id;
			me._asm_kat_map_1.ggRadar.update();
			me._compasspointer1.logicBlock_visible();
			me._beamdot.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._asm_info.logicBlock_visible();
			me._info.logicBlock_position();
			me._show_backround.logicBlock_position();
			me._asm_p_map_1.logicBlock_position();
			me._asm_p_map_1.ggClearMap();
			me._asm_p_map_1.ggInitMap(false);
			me._asm_p_map_1.ggInitMapMarkers(true);
			me._asm_kat_map_1.logicBlock_position();
			me._asm_kat_map_1.ggClearMap();
			me._asm_kat_map_1.ggInitMap(false);
			me._asm_kat_map_1.ggInitMapMarkers(true);
			me._compasspointer1.logicBlock_visible();
			me._beamdot.logicBlock_visible();
			me._tt_enter_vr.logicBlock_position();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_fullscreen.logicBlock_visible();
			me._buttonimage_normalscreen.logicBlock_visible();
			me._tt_fullscreen.logicBlock_text();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_fullscreen.logicBlock_visible();
			me._buttonimage_normalscreen.logicBlock_visible();
			me._tt_fullscreen.logicBlock_text();
		});
		player.addListener('hastouch', function(event) {
			me._tt_enter_vr.logicBlock_position();
		});
		player.addListener('positionchanged', function(event) {
			me._asm_p_map_1.ggRadar.update();
			me._asm_kat_map_1.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_asm_compass', function(event) {
			me._compasspointer1.logicBlock_visible();
			me._beamdot.logicBlock_visible();
		});
		player.addListener('varchanged_asm_info', function(event) {
			me._asm_info.logicBlock_visible();
			me._info.logicBlock_position();
		});
		player.addListener('varchanged_asm_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_asm_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_asm_show_open', function(event) {
			me._show_backround.logicBlock_position();
		});
		player.addListener('varchanged_open_image_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_open_image_hotspots();
				}
			}
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_show', function(event) {
			me._asm_p_map_1.logicBlock_position();
		});
		player.addListener('varchanged_vis_show_plan', function(event) {
			me._asm_kat_map_1.logicBlock_position();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('vrchanged', function(event) {
			me._enter_vr.logicBlock_visible();
		});
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup=document.createElement('div');
		el.ggId="ht_image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -30px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateSize == 0) {
					me._ht_image_popup.style.width='600px';
					me._ht_image_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
				else {
					me._ht_image_popup.style.width='60px';
					me._ht_image_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
			}
		}
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup.style.visibility=me._ht_image_popup.ggVisible?'inherit':'hidden';
					me._ht_image_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup.style.opacity == 0.0) { me._ht_image_popup.style.visibility="hidden"; } }, 405);
					me._ht_image_popup.style.opacity=0;
				}
			}
		}
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup_title=document.createElement('div');
		els=me._ht_image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_image_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_title);
		el=me._ht_image_popup_img=document.createElement('div');
		els=me._ht_image_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_popup_img.ggSubElement.setAttribute('alt', player._(me._ht_image_popup_img.ggAltText));
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._ht_image_popup_img.ggText_untranslated = img;
			me._ht_image_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_popup_img.ggSubElement.style.width = '0px';
			me._ht_image_popup_img.ggSubElement.style.height = '0px';
			me._ht_image_popup_img.ggSubElement.src='';
			me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_popup_img.ggText != player._(me._ht_image_popup_img.ggText_untranslated)) {
				me._ht_image_popup_img.ggText = player._(me._ht_image_popup_img.ggText_untranslated);
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._ht_image_popup_img.ggText != ""+player.getBasePath()+""+player._(me.hotspot.url)+"") {
				me._ht_image_popup_img.ggText=""+player.getBasePath()+""+player._(me.hotspot.url)+"";
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_popup_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_popup_img.clientWidth;
			var parentHeight = me._ht_image_popup_img.clientHeight;
			var img = me._ht_image_popup_img__img;
			var aspectRatioDiv = me._ht_image_popup_img.clientWidth / me._ht_image_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_popup_img.ggScrollbars || currentWidth < me._ht_image_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_popup_img.scrollLeft=currentWidth / 2 - me._ht_image_popup_img.clientWidth / 2;
			}
			if (!me._ht_image_popup_img.ggScrollbars || currentHeight < me._ht_image_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_popup_img.scrollTop=currentHeight / 2 - me._ht_image_popup_img.clientHeight / 2;
			}
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_img);
		me._ht_image.appendChild(me._ht_image_popup);
		el=me._ht_image_popup_close=document.createElement('div');
		els=me._ht_image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_image_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNkZmUwMzYiIGZpbGwtb3BhY2l0eT0iMSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup_close.style.visibility=me._ht_image_popup_close.ggVisible?'inherit':'hidden';
					me._ht_image_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup_close.style.opacity == 0.0) { me._ht_image_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_image_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_image_popup_close.logicBlock_alpha();
		me._ht_image_popup_close.onclick=function (e) {
			player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_image_popup_img.style.transition='none';
			} else {
				me._ht_image_popup_img.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_img.style.opacity='0';
			me._ht_image_popup_img.style.visibility='hidden';
			me._ht_image_popup_img.ggSubElement.src='';
			if (player.transitionsDisabled) {
				me._ht_image_popup_title.style.transition='none';
			} else {
				me._ht_image_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_title.style.opacity='0';
			me._ht_image_popup_title.style.visibility='hidden';
			me._ht_image.style.zIndex='-1';
		}
		me._ht_image_popup_close.onmouseenter=function (e) {
			me._ht_image_popup_close__img.style.visibility='hidden';
			me._ht_image_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_popup_close']=true;
		}
		me._ht_image_popup_close.onmouseleave=function (e) {
			me._ht_image_popup_close__img.style.visibility='inherit';
			me._ht_image_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_popup_close']=false;
		}
		me._ht_image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_popup_close);
		el=me._ht_image_tooltip=document.createElement('div');
		els=me._ht_image_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				(((player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_tooltip.style.visibility=me._ht_image_tooltip.ggVisible?'inherit':'hidden';
					me._ht_image_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_tooltip.style.opacity == 0.0) { me._ht_image_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_image_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_tooltip);
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZmlsZS10ZXh0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2U9IiNmZmZmZmYiIHdpZHRoPSIyNCI+CiA8cGF0aCBkPSJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6Ii8+CiA8cG9seWxpbmUgcG9pbnRzPSIxNCAyIDE0IDggMjAgOC'+
			'IvPgogPGxpbmUgeDE9IjE2IiB5MT0iMTMiIHkyPSIxMyIgeDI9IjgiLz4KIDxsaW5lIHgxPSIxNiIgeTE9IjE3IiB5Mj0iMTciIHgyPSI4Ii8+CiA8cG9seWxpbmUgcG9pbnRzPSIxMCA5IDkgOSA4IDkiLz4KPC9zdmc+Cg==';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZmlsZS10ZXh0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiB3aWR0aD0iMjQiPgogPHBhdGggZD0iTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4eiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTQgMiAxNCA4IDIwIDgiLz4KIDxsaW5lIHgxPS'+
			'IxNiIgeTE9IjEzIiB5Mj0iMTMiIHgyPSI4Ii8+CiA8bGluZSB4MT0iMTYiIHkxPSIxNyIgeTI9IjE3IiB4Mj0iOCIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTAgOSA5IDkgOCA5Ii8+Cjwvc3ZnPgo=';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon.style.opacity == 0.0) { me._ht_image_icon.style.visibility="hidden"; } }, 305);
					me._ht_image_icon.style.opacity=0;
				}
				else {
					me._ht_image_icon.style.visibility=me._ht_image_icon.ggVisible?'inherit':'hidden';
					me._ht_image_icon.style.opacity=1;
				}
			}
		}
		me._ht_image_icon.logicBlock_alpha();
		me._ht_image_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_img.style.transition='none';
				} else {
					me._ht_image_popup_img.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_img.style.opacity='1';
				me._ht_image_popup_img.style.visibility=me._ht_image_popup_img.ggVisible?'inherit':'hidden';
				me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_title.style.transition='none';
				} else {
					me._ht_image_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_title.style.opacity='1';
				me._ht_image_popup_title.style.visibility=me._ht_image_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
		}
		me._ht_image_icon.onmouseenter=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.onmouseleave=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_icon);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_image_popup_close']=false;
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_icon.logicBlock_alpha();
		me.elementMouseOver['ht_image_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_icon.logicBlock_alpha();
				player.setVariableValue('open_image_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_image_hotspots=function() {
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 1px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=263;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 263px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -204px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('asm_opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=271;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 271px);';
		hs+='position : absolute;';
		hs+='top : -159px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('asm_opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._hs_visited.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_varchanged_asm_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._compassring.ggParameter) {
			hs+=parameterToTransform(me._compassring.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(-1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compassring.style.transform=hs;
		var hs='';
		if (me._compasspointer1.ggParameter) {
			hs+=parameterToTransform(me._compasspointer1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compasspointer1.style.transform=hs;
		var hs='';
		if (me._compassbeam.ggParameter) {
			hs+=parameterToTransform(me._compassbeam.ggParameter) + ' ';
		}
		hs+='scale(' + (Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._compassbeam.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};